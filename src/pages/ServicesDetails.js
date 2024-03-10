import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";

const ServicesDetails = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Service Details" parentTitle="Services" />
        <div
          className="content-inner "
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 order-lg-1">
                <div className="dz-media m-b30">
                  <img src={IMAGES.aboutman} alt="" />
                </div>
                <div className="dz-content">
                  <div className="m-b40">
                    <h2 className="title m-b15">
                      Servicios de alta calidad
                    </h2>
                    <p>
                      "Explora SportApp: tu aliado digital en el camino hacia un estilo de vida saludable.
                       Descubre servicios de calidad que te impulsarán a alcanzar tus metas fitness."
                    </p>
                    <p>
                    "Con SportApp, accede a un mundo de bienestar integral. 
                    Desde entrenamientos personalizados hasta servicios, productos y planes alimentarios, 
                    tenemos todo lo que necesitas para alcanzar tus metas saludables."
                    </p>
                  </div>

                  <div className="m-b40">
                    <h4 className="m-b15">
                      Plan de servicios
                    </h4>
                    <p>
                    "Explora SPORTAPP y descubre una amplia gama de servicios diseñados para potenciar tus actividades deportivas."
                    </p>


                    <ul className="list-check-2 m-b30">
                      <li>
                        Gran variedad de eventos deportivos
                      </li>
                      <li>
                        Planes de alimentacion de calidad
                      </li>
                      <li>
                        Complemetos en entrenamientos
                      </li>
                    </ul>

                  </div>
                  <div className="row align-items-center">
                    <div className="col-xl-6 m-b30">
                      <h4 className="m-b10">SportApp</h4>
                      <p>
                      "Transformamos tus metas deportivas en logros extraordinarios.
                       Descubre la potencia de nuestros servicios,
                       tu camino hacia el éxito atlético."
                      </p>
                      
                    </div>
                    <div className="col-xl-6 m-b30">
                      <div className="dz-media">
                        <img
                          src={IMAGES.aboutPic7}
                          className="img-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 m-b30">
                <aside className="side-bar left sticky-top">
                  <div className="widget service_menu_nav">
                    <ul>
                      <li className="active">
                        <Link to={"#"}>SPORTAPP</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Entrenamiento</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Cursos Online</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Pedida de peso</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Alimentacion balanceada</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Entrenadores</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Aumento de peso</Link>{" "}
                      </li>
                    </ul>
                    <svg
                      width="250"
                      height="70"
                      viewBox="0 0 250 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 38L250 0L210 70L0 38Z"
                        fill="url(#paint0_linear_306_1296)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_306_1296"
                          x1="118.877"
                          y1="35.552"
                          x2="250.365"
                          y2="35.552"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="1" stopColor="var(--primary)"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="widget_contact ">
                    <div className="widget-content">
                      <div className="icon-bx">
                        <i className="flaticon-contact-center"></i>
                      </div>
                      <h4>Necesitas ayuda?</h4>
                      <div className="phone-number">+57 315 000 0000</div>
                      <h6 className="email">sportapp@app.com</h6>
                      <div className="link-btn">
                        <Link
                          to={"/contact-us"}
                          className="btn btn-dark btn-skew"
                        >
                          <span>Contactanos   </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ServicesDetails;
