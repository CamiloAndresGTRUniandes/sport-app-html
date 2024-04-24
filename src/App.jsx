import React, { useState } from "react";
import Index from "./pages/Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Css
import "./assets/vendor/switcher/switcher.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserState, setDefaultUser } from "./store/sessionUser";
import { useEffect } from "react";
import { SignalConnector } from "./helpers";

function App() {
  const dispatch = useDispatch();
  const { sessionUser } = useSelector((state) => state);
  const [userId, setUserId] = useState("");

  const CloseButton = ({ closeToast }) => (
    <span className=" ml-5 mt-2" onClick={myAlert}>
      Ir
    </span>
  );

  const notify = (values) => {
    console.log("Notify"  );
    toast.success(values.title, {
      closeButton: CloseButton,
    });
  };
  const { dataSignal } = SignalConnector(notify, userId);

  useEffect(() => {
    //notify();
    if (sessionUser.userInfo?.name === "") {
      if (sessionStorage.getItem("userLogin")) {
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        dispatch(setUserState(userLogin));
      } else {
        dispatch(setDefaultUser());
      }
    }
  }, []);

  useEffect(() => {
    console.log("userInfo useEffect APP", sessionUser);
    if (
      sessionUser.userInfo?.id != "" 
    ) {
      console.log("new Connection  useEffect APP");
      setUserId(sessionUser.userInfo?.id);
    }
  }, [sessionUser.userInfo?.id]);

  const myAlert = (e) => {
    e.preventDefault();
    alert("Go to recomedacion");
  };

  console.log("Notify data signal", dataSignal  );

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
      ></ToastContainer>
    </>
  );
}
export default App;
