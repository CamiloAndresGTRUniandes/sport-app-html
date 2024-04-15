import { useState} from "react";
import axios from "axios";

const useEmailExists = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const urlAPI=  process.env.REACT_APP_API_URL;
  const validateEmail = async (email) => {
    setIsSubmitting(true);
    try {
      const response = await axios.get(`${urlAPI}/api/V1/Account/is-email-unique/${email.trim()}`);
      setEmailExists(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    emailExists,
    errorMessage,
    validateEmail,
  };
};

export default useEmailExists;