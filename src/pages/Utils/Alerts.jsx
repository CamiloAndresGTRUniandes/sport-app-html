import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Alerts = () => {
  const showAlertSuccess = (title, message) => {
    withReactContent(Swal).fire({
      title: title,
      text: message,
      icon: "success",
      timer: 2500,
    });
  };

  const showAlertError = (title, message) => {
    withReactContent(Swal).fire({
      title: title,
      text: message,
      icon: "error",
      timer: 2500,
    });
  };
  return {
    showAlertSuccess,
    showAlertError,
  };
};
