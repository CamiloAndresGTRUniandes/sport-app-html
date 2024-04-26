import axios from "axios";
import { useState } from "react";
import { Alerts } from "../../Utils/Alerts";

const useRegisterUser = (initial) => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const {  showAlertSuccess,showAlertError} = Alerts();

  const createUser = async (newUser) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${urlAPI}/api/V1/Account/Register`,
        newUser
      );
      setUserCreated(true);
      showAlertSuccess(
        "Felicitaciones :)",
        `Hola ${newUser.firstName},  tu usuario ha sido creado `
      );
      setLoading(false);

    } catch (error) {
      showAlertError(
        "Ups, Sorry :(",
        `Hola ${newUser.firstName}, No se ha creado tu usuario `
      );
      setUserCreated(false);
      setLoading(false);
    } finally {
      setLoading(false); // Ensure loading state is updated even on errors
    }

  };

  return {
    createUser,
    loading,
    userCreated,
  };
};

export default useRegisterUser;