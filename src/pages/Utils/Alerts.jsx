import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { format } from "date-fns";

export const Alerts = () => {
  const showClassAnimation = {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
  };



  const showAlertSuccess = (title, message) => {
    withReactContent(Swal).fire({
      title: title,
      showClass: showClassAnimation,
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
      showClass: showClassAnimation,
    });
  };

  const showAlertSuscription = (title, description, event, onConfirm) => {
    Swal.fire({
      showClass: showClassAnimation,
      //icon: "info",
      html: `
      <p><b>${title} </b></p>
        <br>
        <img src='${
          event.picture
        }' width='300px'  class='img-fluid img-thumbnail'/>
        <p>${description}</p>
        <p>Fecha inicio: ${format(event.start, "yyyy-MM-dd HH:mm")} </p>
        <p>Fecha fin: ${format(event.end, "yyyy-MM-dd HH:mm")} </p>
      `,
      showCloseButton: true,
      timer: 5500,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Suscribete!
      `,
      confirmButtonAriaLabel: " Suscribete!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down",
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm(event);
      }
    });
  };
  return {
    showAlertSuccess,
    showAlertError,
    showAlertSuscription
  };
};
