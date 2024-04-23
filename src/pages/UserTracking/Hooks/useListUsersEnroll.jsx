import { useState } from "react";
import axios from "axios";
import { GetUserInfo } from "../../Utils";
const urlAPI = process.env.REACT_APP_API_URL;

export const useListUsersEnroll = () => {

  const [listAllUsers, setListAllUsers]= useState([]);
  const [listUsers, setListUsers]= useState([]);
  const[loadingUserList,setLoadingUserList]= useState(false);
  const[nameAsociate, setNameAsociate ]= useState("");
  const { getToken, getUser } = GetUserInfo();
  let tokenPayload = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  

  const getListUsersEnroll=  async () => {
    const user = getUser();
    setLoadingUserList(true);
    const response = await axios.get(
      `${urlAPI}/api/V1/EnrollServiceUser/ByAsociate/${user.id}`,
      tokenPayload
    );
    setNameAsociate(user.name);
    setListAllUsers(response.data);
    setListUsers(response.data);
    setLoadingUserList(false);
  
  };
  
  
  return {
    listAllUsers,
    listUsers,
    loadingUserList,
    getListUsersEnroll,
    nameAsociate
  };
}
