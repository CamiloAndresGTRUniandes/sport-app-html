import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Alerts = () => {

  const showClassAnimation={
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  };

  const hideClassAnimation={
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
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
      showClass: showClassAnimation
    },
    
    );
  };

  const showAlertHtml=(title, description, event, onConfirm)=>
  {
    Swal.fire({
      title: `<strong><u>${title}</u></strong>`,
      showClass: showClassAnimation,
      icon: "info",
      html: `
        <p>${description}</p>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
      
        onConfirm(event);
      
        /*
        Swal.fire({title:"Evento registrado", text:"Suscripcion de evento", icon:"success",
        showClass: showClassAnimation,
    
      });*/
      
      }
    });
    ;

  }
  return {
    showAlertSuccess,
    showAlertError,
    showAlertHtml
  };
};
