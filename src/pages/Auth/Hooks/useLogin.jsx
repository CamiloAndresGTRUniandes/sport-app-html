import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserState } from "../../../store/sessionUser";
import { Alerts } from "../../Utils/Alerts";

const useLogin = () => {
  const { showAlertSuccess, showAlertError } = Alerts();
  const dispatch = useDispatch();
  const [loadingUser, setLoadingUser] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [error, setError] = useState(null);
  const urlAPI = process.env.REACT_APP_API_URL;

  const LoginUser = async (formCredentials) => {

    setLoadingUser(true);
    setError(null);
    setUserLogged(false);
    try {
      const response = await axios.post(
        `${urlAPI}/api/V1/Account/Login`,
        formCredentials
      );
      dispatch(setUserState(response.data));
      sessionStorage.setItem('userLogin', JSON.stringify(response.data));
      setUserLogged(true);
      showMessageForLogin(response.data.name);
      
    } catch (error) {
      console.log("my error",error);
      setUserLogged(false);
      showErrorMessage();
      setError(error);
    } finally {
      setLoadingUser(false);
    }
  };

  const showMessageForLogin = (name) => {
    showAlertSuccess("Bienvenido a sport App :)!",`Hola ${name}`);
  };

  const showErrorMessage = () => {
    showAlertError(
      "Inicio de session sport App",
      `:( Credenciales erradas, trata de nuevo!`
    );
  };
  return {
    LoginUser,
    loadingUser,
    error,
    userLogged,
  };
};

export default useLogin;
