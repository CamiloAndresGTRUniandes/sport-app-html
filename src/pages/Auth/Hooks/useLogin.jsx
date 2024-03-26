import { useState } from 'react';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function useLogin(initial) {
  console.log('initial=>', initial);

  const [credentials, setCredentials] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const [error, setError] = useState(null); // Added for error handling
  const urlAPI = process.env.REACT_APP_API_URL;

  const LoginUser = async (formCredentials) => {
    setLoadingUser(true); // Set loading state before making request
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(`${urlAPI}/api/V1/Account/Login`, formCredentials);
      console.log('Login successful:', response.data);
      setCredentials(response.data);
      showSwal(response.data.name);
      
    } catch (error) {
      errorSwal();
      setError(error); // Store error for handling in the component
    } finally {
      setLoadingUser(false); // Ensure loading state is updated even on errors
    }
  };

  const showSwal = (name) => {
    withReactContent(Swal).fire({
      title: 'Bienvenido a sport App :)!',
      text: `Hola ${name}`,
      icon: "success",
      timer: 25000,
    })
  }
  const errorSwal = () => {
    withReactContent(Swal).fire({
      title: 'Inicio de session en sport App :(!',
      text: `Trata  de  ingresar de nuevo tus credenciales`,
      icon: "error",
      timer: 25000,
    })
  }

  return {
    LoginUser,
    loadingUser,
    credentials,
    error, // Return error for handling
  };
}

export default useLogin;