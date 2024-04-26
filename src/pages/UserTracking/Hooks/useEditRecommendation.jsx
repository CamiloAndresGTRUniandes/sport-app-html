import { useState } from "react";
import axios from "axios";
import { GetUserInfo, Alerts } from "../../Utils";
const urlAPI = process.env.REACT_APP_API_URL;
export const useEditRecommendation = () => {
  const [listRecommendations, setListRecommendations]= useState([]);
  const[loadingTypeOfRecommendation,setLoadingTypeOfRecommendation]= useState(true);
  const[loadingSaveRecommendation, setLoadingSaveRecommendation]=useState(false);
  const [userRecommendationSave, setUserRecommendationSave] = useState(false);
  const { showAlertSuccess, showAlertError } = Alerts();
  const [userTracking, setUserTracking] = useState(null);

  const { getToken} = GetUserInfo();
  let tokenPayload = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  

  const getDataTracking=  async () => {
      const response = await axios.get(
      `${urlAPI}/api/V1/TypeOfRecomendations`,
      tokenPayload
    );
    setListRecommendations(response.data);
    setLoadingTypeOfRecommendation(false);
  };
  
 


  const saveRecommendation = async (valuesRecommendation) => {
    try {
      setLoadingSaveRecommendation(true);
      await axios.post(
        `${urlAPI}/api/V1/UserRecommendation/CreateUserRecommendation`,
        valuesRecommendation,
        tokenPayload
      );
      await axios.post(
        `${urlAPI}/api/V1/UserGoalTracking/Save`,
        valuesRecommendation.tracking,
        tokenPayload
      );
      setUserRecommendationSave(true);
      showAlertSuccess(
        "Felicitaciones :)",
        `Hola, has creado una recomendacion para tu usuario `
      );
      setLoadingSaveRecommendation(false);
    } catch (error) {
      showAlertError(
        "Ups, Sorry :(",
        `Hola no hemos podido crear la recomendacion`
      );
      setLoadingSaveRecommendation(false);
      setUserRecommendationSave(false);
    } finally {
      setLoadingSaveRecommendation(false); // Ensure loading state is updated even on errors
    }
  };
  
  return {
    listRecommendations,
    loadingTypeOfRecommendation,
    getDataTracking,
    loadingSaveRecommendation,
    userRecommendationSave,
    saveRecommendation
  };
}
