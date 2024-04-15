import { useSelector } from "react-redux";
  // istanbul ignore next
export const GetUserInfo = () => {
  const { sessionUser } = useSelector((state) => state);
  const getToken = () => {
    return sessionUser.userInfo.token;
  };
  const getUser = () => {
    return sessionUser.userInfo;
  };
  return {
    getToken,
    getUser,
  };
};
