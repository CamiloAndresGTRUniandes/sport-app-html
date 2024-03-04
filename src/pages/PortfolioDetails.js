import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { IMAGES } from "../constants/theme";
import ClientLogoSlider from "../elements/ClientLogoSlider";
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";
import WorkoutSlider from "../elements/WorkoutSlider";
import { Link } from "react-router-dom";

const galleryBlog = [
  { image: IMAGES.bloggrid1 },
  { image: IMAGES.bloggrid2 },
  { image: IMAGES.bloggrid3 },
];

const listData = [
  { title: "Project Category", subtitle: "Domal Williamson" },
  { title: "Service:", subtitle: "Fitness Health Advisor" },
  { title: "Client Company", subtitle: "Health Advisor" },
  { title: "Project Date", subtitle: "7 March, 2023" },
];

const boxGrid = [
  { image: IMAGES.bloggrid4, coloumn: "col-xl-3" },
  { image: IMAGES.bloggrid5, coloumn: "col-xl-6" },
  { image: IMAGES.bloggrid1, coloumn: "col-xl-3" },
];

const PortfolioDetails = () => {
  const onInit = () => {};

  return (
    <>
      <div className="page-wraper">
        <div className="page-content bg-white">
          <PageTitle activePage="Detalles Portafolio" parentTitle="Portfolio" />
          <div className="content-inner">
            <div className="container">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="row lightgallery justify-content-center"
                getCaptionFromTitleOrAlt={false}
                alignThumbnails="left"
              >
                {galleryBlog.map((data, ind) => (
                  <div
                    className="col-xl-4 col-md-6 m-lg-b30"
                    key={ind}
                    data-src={data.image}
                  >
                    <div className="dz-box gallery">
                      <div className="dz-media">
                        <img src={data.image} alt="gallery" />
                      </div>
                      <div className="content">
                        <span className="view-btn lightimg" title="">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </LightGallery>
            </div>
          </div>
          <section className="">
            <div className="container">
              <div className="port-single-info bg-secondary">
                <div className="portfolio-foot">
                  <ul>
                    {listData.map((item, index) => (
                      <li key={index}>
                        <h6>{item.title}</h6>
                        <span className="text">{item.subtitle}</span>
                      </li>
                    ))}
                    <li>
                      <h6>Our Support</h6>
                      <div className="widget widget_getintuch">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope"></i>
                            <span>info@example.com</span>
                          </li>
                          <li>
                            <i className="fa-solid fa-phone"></i>
                            <span>+57 311 9669 69 96</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h6 className="m-b15">Nuestras redes sociales</h6>
                      <div className="dz-social-icon style-3 m-t10">
                        <ul>
                          <li>
                            <Link
                              target="_blank"
                              to="https://www.facebook.com/"
                              rel="noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              target="_blank"
                              to="https://www.instagram.com/"
                              rel="noreferrer"
                            >
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              target="_blank"
                              to="https://twitter.com/"
                              rel="noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              target="_blank"
                              to="https://whatsapp.com/"
                              rel="noreferrer"
                            >
                              <i className="fa-brands fa-whatsapp" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
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
            </div>
          </section>
          <section className="content-inner-2 port-single-content">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-7">
                  <h3 className="title">Gimnasio Fitness</h3>
                  <p className="text">
                    En el mundo del fitness, cada día es una oportunidad para
                    desafiarnos a nosotros mismos y alcanzar nuevas metas. Desde
                    el momento en que nos levantamos hasta que nos retiramos,
                    estamos comprometidos con nuestro bienestar físico y mental.
                    Cada repetición, cada carrera y cada sesión de entrenamiento
                    nos acerca un paso más a ser la mejor versión de nosotros
                    mismos. Nos esforzamos por superar obstáculos, fortalecer
                    nuestros cuerpos y elevar nuestras mentes hacia una mayor
                    resistencia y determinación. En el camino hacia la
                    excelencia física, encontramos la satisfacción y el orgullo
                    en cada esfuerzo dedicado.
                  </p>
                  <p className="text">
                    En el ambiente vibrante del gimnasio, el sonido constante de
                    los pesos chocando y la música motivadora nos impulsa a dar
                    lo mejor de nosotros mismos. Aquí, en este santuario del
                    fitness, nos sumergimos en un mundo donde el sudor y la
                    determinación son moneda corriente. Cada máquina, cada
                    mancuerna y cada ejercicio nos desafía a superar nuestros
                    límites físicos y mentales. En este espacio sagrado,
                    encontramos la fuerza para conquistar nuestras debilidades y
                    forjar nuestros cuerpos en la mejor versión de sí mismos. El
                    gimnasio no es solo un lugar para entrenar, sino un refugio
                    donde se cultiva la disciplina, la dedicación y la pasión
                    por alcanzar nuestras metas de acondicionamiento físico.
                  </p>
                </div>
                <div className="col-xl-6 col-md-5">
                  <img src={IMAGES.singlepic1} alt="" className="img-cover" />
                </div>
              </div>
            </div>
          </section>
          <div className="content-inner">
            <div className="container">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="row lightgallery justify-content-center"
                getCaptionFromTitleOrAlt={false}
                alignThumbnails="left"
              >
                {boxGrid.map((data, index) => (
                  <div
                    className={`col-md-6 m-lg-b30 ${data.coloumn}`}
                    key={index}
                    data-src={data.image}
                  >
                    <div className="dz-box gallery img-cover-1">
                      <div className="dz-media img-cover-1">
                        <img src={data.image} className="img-cover-3" alt="" />
                      </div>
                      <div className="content">
                        <span
                          data-exthumbimage={data.image}
                          data-src={data.image}
                          className="view-btn lightimg"
                          title=""
                        >
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </LightGallery>
            </div>
          </div>
          <section className="content-inner portfolio-wrapper">
            <div className="portfolio-wrapper-inner">
              <div className="container-fluid  p-0">
                <WorkoutSlider />
              </div>
            </div>
            <svg
              className="shape-up"
              width="635"
              height="107"
              viewBox="0 0 635 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M577 0L-16 107L635 45L577 0Z"
                fill="var(--primary-dark)"
              />
            </svg>
            <svg
              className="shape-down"
              width="673"
              height="109"
              viewBox="0 0 673 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M682 0L0 56L682 109V0Z" fill="var(--primary)" />
            </svg>
          </section>
          <div className="half-shape-top-w content-inner-1">
            <div className="container">
              <div className="clients-box">
                <ClientLogoSlider />
              </div>
            </div>
          </div>
          <section className="call-action style-1 footer-action">
            <div className="container">
              <NewsLetter />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
