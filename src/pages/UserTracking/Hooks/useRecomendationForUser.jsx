import { useState } from "react";
import axios from "axios";
import { GetUserInfo } from "../../Utils";
const urlAPI = process.env.REACT_APP_API_URL;
 // istanbul ignore next
export const useRecomendationForUser = () => {
  const [recommendationUsers, setRecommendationUsers]= useState({});
  const[loadingRecommendationUser,setLoadingRecommendationUser]= useState(true);
  const[nameAsociate, setNameAsociate ]= useState("");
  const { getToken, getUser } = GetUserInfo();
  let tokenPayload = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  

  const getRecommendationUser=  async (id) => {
    const user = getUser();
    const response = await axios.get(
      `${urlAPI}/api/V1/EnrollServiceUser/ById/${id}`,
      tokenPayload
    );
    setNameAsociate(user.name);
    setRecommendationUsers(response.data);
    setLoadingRecommendationUser(false);
  };
  return {
    recommendationUsers,
    loadingRecommendationUser,
    getRecommendationUser,
    nameAsociate
  };
}
