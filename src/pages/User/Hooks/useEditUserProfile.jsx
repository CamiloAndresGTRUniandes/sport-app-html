import { useState, useRef, useEffect } from "react";
import { GetUserInfo } from "../../Utils/GetUserInfo";
import axios from "axios";

export const useEditUserProfile = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const { getToken, getUser } = GetUserInfo();
  const token = useRef(getToken());
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const [userProfile, setUserProfile] = useState();
  const [newCountryId, setNewCountryId] = useState(null);
  const [newStateId, setNewStateId] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [statesUP, setStatesUP] = useState([]);
  const [citiesUP, setCitiesUP] = useState([]);
  const [genresUP, setGenresUP] = useState([]);
  const [countriesUP, setCountriesUP] = useState([]);
  let tokenPayload = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  const GetUserProfile = async () => {
    try {
      const user = getUser();
      const response = await axios.get(
        `${urlAPI}/api/V1/UserSportProfile/${user.id}`,
        { headers: { Authorization: `Bearer ${token.current}` } }
      );
      setUserProfile(response.data);
      await fetchAllReferencial(response.data);
    } catch (error) {
      console.log("user profile error", error);
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

      await axios
        .all([genres$, countries$])
        .then(
          axios.spread((gen, cou) => {
            setGenresUP(gen.data);
            setCountriesUP(cou.data);
            setNewCountryId(user.countryId);
            setNewStateId(user.stateId);
            
          })
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
    if (newCountryId === 0 && !userLoading) {
      setStatesUP([]);
      setCitiesUP([]);
    } else if (newCountryId) {
      console.log("New country", newCountryId);
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
    if (newStateId === 0 && !userLoading) {
      setCitiesUP([]);
    } else if (newStateId) {
      axios
        .get(
          `${urlAPI}/api/Geography/CitiesByState/${newStateId}`,
          tokenPayload
        )
        .then((reponse) => {
          setCitiesUP(reponse.data);
          setUserLoading(false);
        });
    }
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
  };
};
