import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";

const serviceList = [
  { title: "Entrenamientos" },
  { title: "Mejora estado fisico" },
  { title: "Planes de alimentacion" },
  { title: "Elementos deportivos" },
  { title: "Asesoria nutricional" },
  { title: "Eventos deportivos" },
  { title: "Planes de entrenamiento" },
  { title: "Cardio y Mas" },
];
const AboutServices = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="dz-media p-r20">
            <img src={IMAGES.aboutdani} alt="" className="wow fadeInUp" />
          </div>
        </div>
        <AboutServicesDetails />
      </div>
    </>
  );
};

export default AboutServices;

export const AboutServicesDetails = () => {
  return (
    <>
      <div className="col-lg-6 about-content m-lg-t40 wow fadeInUp">
        <div className="section-head style-1">
          <h5 className="sub-title">El momento es ahora</h5>
          <h2 className="title mb-0">
            Toma <span> Accion </span>
          </h2>
          <p className="description m-b10">
            SportApp
          </p>
        </div>
        <p>
        Con SportApp lograras gestionar tus entrenamientos de una manera eficiente
        </p>
        <ul className="pr-list list-italic m-t30 m-b35">
          {serviceList.map((item, ind) => (
            <li key={ind}>
              <i className="flaticon-check-mark"></i>
              {item.title}
            </li>
          ))}
        </ul>
        <Link
          to="/about-us"
          className="btn btn-skew btn-lg btn-primary shadow-primary"
        >
          <span>Comenzar</span>
        </Link>
      </div>
    </>
  );
};
