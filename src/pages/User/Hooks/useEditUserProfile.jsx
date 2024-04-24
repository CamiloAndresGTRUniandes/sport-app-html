import { useState, useRef, useEffect } from "react";
import { Alerts, GetUserInfo } from "../../Utils";
import axios from "axios";

export const useEditUserProfile = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const { getToken, getUser } = GetUserInfo();
  const token = useRef(getToken());
  const [userProfile, setUserProfile] = useState();
  const [newCountryId, setNewCountryId] = useState(null);
  const [newStateId, setNewStateId] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [statesUP, setStatesUP] = useState([]);
  const [citiesUP, setCitiesUP] = useState([]);
  const [genresUP, setGenresUP] = useState([]);
  const [physicalLevelsUP, setPhysicalLevels] = useState([]);
  const [goalsUP, setGoalsUp] = useState([]);
  const [activitiesUP, setActivitiesUp] = useState([]);
  const [typesOfNutritionUP, setTypesOfNutritionUP] = useState([]);
  const [nutritionalAllergiesUP, setNutritionalAllergiesUP] = useState([]);
  const [countriesUP, setCountriesUP] = useState([]);
  const [loadingUpdateProfile, setLoadingUpdateProfile] = useState(false);
  const [userUpdated, setUserUpdated] = useState(false);
  const { showAlertSuccess, showAlertError } = Alerts();
  let tokenPayload = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  const GuidEmpty = "00000000-0000-0000-0000-000000000000";
  const updateUser = async (updUser) => {
    try {
      setLoadingUpdateProfile(true);
      const response = await axios.put(
        `${urlAPI}/api/V1/UserSportProfile`,
        updUser,
        tokenPayload
      );
      console.log("response update", response);
      setUserUpdated(true);
      showAlertSuccess(
        "Felicitaciones :)",
        `Hola ${updUser.name},  tu perfil ha sido actualizado `
      );
      setLoadingUpdateProfile(false);
    } catch (error) {
      showAlertError(
        "Ups, Sorry :(",
        `Hola ${updUser.firstName}, No se ha actualizado tu usuario `
      );
      setUserUpdated(false);
      console.log("udpate user error", error);
      setLoadingUpdateProfile(false);
    } finally {
      setLoadingUpdateProfile(false); // Ensure loading state is updated even on errors
    }
  };

  const GetUserProfile = async () => {
    try {
      const user = getUser();
      const response = await axios.get(
        `${urlAPI}/api/V1/UserSportProfile/${user.id}`,
        { headers: { Authorization: `Bearer ${token.current}` } }
      );
      response.data.dateOfBirth = response.data.dateOfBirth.slice(0, 10);
      setUserProfile(response.data);
      await fetchAllReferencial(response.data);
    } catch (error) {
      setUserLoading(false);
    }
  };

  const fetchAllReferencial = async (user) => {
    try {
      const genres$ = axios.get(`${urlAPI}/api/V1/Genres`, tokenPayload);
      const countries$ = axios.get(
        `${urlAPI}/api/Geography/AllCountries`,
        tokenPayload
      );
      const typeOfNutrition$ = axios.get(
        `${urlAPI}/api/V1/TypeOfNutrition`,
        tokenPayload
      );

      const nutAllergieS$ = axios.get(
        `${urlAPI}/api/V1/NutricionalAllergy`,
        tokenPayload
      );

      const physicalLevel$ = axios.get(
        `${urlAPI}/api/V1/PhysicalLevel`,
        tokenPayload
      );

      const activities$ = axios.get(`${urlAPI}/api/V1/Activity`, tokenPayload);

      const goals$ = axios.get(`${urlAPI}/api/V1/Goal`, tokenPayload);

      const cities$ = axios.get(
        `${urlAPI}/api/Geography/StatesByCountry/${user.stateId}`,
        tokenPayload
      );

      await axios
        .all([
          genres$,
          countries$,
          typeOfNutrition$,
          nutAllergieS$,
          physicalLevel$,
          activities$,
          goals$,
          cities$,
        ])
        .then(
          axios.spread(
            (
              gen,
              cou,
              typNut,
              nutAllergies,
              phyLevels,
              activities,
              goals,
              cities
            ) => {
              setGenresUP(gen.data);
              setCountriesUP(cou.data);
              setTypesOfNutritionUP(typNut.data);
              setNutritionalAllergiesUP(nutAllergies.data);
              setPhysicalLevels(phyLevels.data);
              setActivitiesUp(activities.data);
              setGoalsUp(goals.data);
              setNewCountryId(user.countryId);
              setNewStateId(user.stateId);
              if (user.cityId === GuidEmpty || user.cityId === "") {
                setUserLoading(false);
              }
            }
          )
        )
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("use Edit Profile", error);
    }
  };

  const changeNewCountry = (countryId) => setNewCountryId(countryId);

  useEffect(() => {
    if (newCountryId === "" && !userLoading) {
      setStatesUP([]);
      setCitiesUP([]);
    } else if (newCountryId) {
      axios
        .get(
          `${urlAPI}/api/Geography/StatesByCountry/${newCountryId}`,
          tokenPayload
        )
        .then((response) => {
          setStatesUP(response.data);
          setCitiesUP([]);
        });
    }
  }, [newCountryId]);

  const changeNewState = (stateId) => setNewStateId(stateId);
  useEffect(() => {
    async function getCities() {
      if ((newStateId === "" || newStateId === GuidEmpty) && !userLoading) {
        setCitiesUP([]);
        setTimeout(() => {
          enabledUserLoading();
        }, 250);
      } else if (newStateId) {
        var response = await axios.get(
          `${urlAPI}/api/Geography/CitiesByState/${newStateId}`,
          tokenPayload
        );

        setCitiesUP(response.data);
        setTimeout(() => {
          enabledUserLoading();
        }, 250);
      }
    }

    async function enabledUserLoading() {
      setUserLoading(false);
    }
    getCities();
  }, [newStateId]);

  return {
    GetUserProfile,
    userProfile,
    userLoading,
    genresUP,
    countriesUP,
    statesUP,
    citiesUP,
    setUserProfile,
    changeNewCountry,
    changeNewState,
    typesOfNutritionUP,
    nutricionalAllergiesUP: nutritionalAllergiesUP,
    physicalLevelsUP,
    activitiesUP,
    goalsUP,
    updateUser,
    loadingUpdateProfile,
    userUpdated,
  };
};
