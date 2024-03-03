import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";

const portBlog = [
  {
    images: IMAGES.portfolio1,
    title: "Fitness: ejercicios de entrenamiento para perder grasa",
  },
  {
    images: IMAGES.portfolio7,
    title: "¿Qué puedes hacer con respecto al fitness?",
  },
  {
    images: IMAGES.portfolio3,
    title: "3 formas de lograr un mejor estado físico más rápido",
  },
  {
    images: IMAGES.portfolio4,
    title: "14 días para mejorar tu forma física ahora mismo",
  },
  {
    images: IMAGES.portfolio5,
    title: "Maneras sencillas de hacer ejercicio más rápido",
  },
  {
    images: IMAGES.portfolio6,
    title: "Estrategias de fitness para principiantes",
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Portafolio" parentTitle="Portafolio" />
        <section className="content-inner">
          <div className="container">
            <div className="row ">
              {portBlog.map((data, index) => (
                <div className="col-lg-4 col-sm-6 m-b40" key={index}>
                  <div className="dz-box style-2">
                    <div className="dz-media">
                      <Link to={"/portfolio-details"}>
                        <img src={data.images} alt="" />
                      </Link>
                    </div>
                    <div className="dz-info">
                      <h4 className="title">
                        <Link to={"/portfolio-details"}>{data.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="call-action style-1 footer-action">
          <div className="container">
            <NewsLetter />
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
