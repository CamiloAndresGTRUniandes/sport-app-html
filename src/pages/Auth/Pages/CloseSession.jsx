import { useEffect } from "react";
import { Alerts } from "../../Utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDefaultUser } from "../../../store/sessionUser";
import PageTitle from "../../../elements/PageTitle";
import { IMAGES } from "../../../constants/theme";

export const CloseSession = () => {
  const { showAlertSuccess } = Alerts();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onCloseSession = (e) => {
    showAlertSuccess(
      "Bye :)",
      "Fue grandioso tenerte, te esperamos proximamente"
    );
    dispatch(setDefaultUser());
    sessionStorage.clear();
    localStorage.removeItem("user");
  };

  useEffect(() => {
    onCloseSession();
  }, []);

  setTimeout(() => {
    navigate("/");
  }, 50);

  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage={"Cerrando sesion"} parentTitle="Auth" />
        <section
          className="content-inner rounded-shape-top overflow-hidden"
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="inner-content text-center" data-text="">
                  <h2 className="error-head">Estamos cerrando sesión</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-action style-1 footer-action">
          <div className="container"></div>
        </section>
      </div>
    </>
  );
};
