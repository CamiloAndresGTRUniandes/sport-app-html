import React from "react";
import Index from "./pages/Index";

import { ToastContainer,ToastContent, toast, ToastOptions  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Css
import "./assets/vendor/switcher/switcher.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import { Link } from "react-router-dom";


function App() {
  const toastId = React.useRef(null);  
   const myAlert=(e)=>
   {
    e.preventDefault();
    alert("Go to recomedacion");
   }

  const CloseButton = ({ closeToast }) => (
    <span
      className=" ml-5 mt-2"
      onClick={myAlert}
    >
      Ir
    </span>
  );
  
  //toast.info(CustomToastWithLink);
  const notify =()=>{
    toast.success("Tienes una nueva notificacion",
    {closeButton: CloseButton}
    );

  }
  notify();
  
  return (
    <>
      <Index />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
        theme="dark"
       
      >
        
        </ToastContainer>
    </>
  );
}

export default App;
