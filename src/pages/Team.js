import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";

const mediaBlog = [
  { images: IMAGES.aboutElisa3, title: "Elisa", position:"SCRUM-Frontend" },
  { images: IMAGES.yonisTrainer, title: "Yonis" , position:"Backend"},
  { images: IMAGES.danielTrainer, title: "Daniel", position:"Mobile-Frontend" },
  { images: IMAGES.camiloTrainer, title: "Camilo", position:"Backend" },
  
];

const Team = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle parentTitle="Pages" activePage="Nuestro equipoo" />
        <section className="animate__animated animate__fadeInRightBig">
          <div className="container">
            <div className="row ">
              {mediaBlog.map((item, index) => (
                <div className="col-lg-6 col-sm-6 m-b30" key={index}>
                  <div className="dz-team style-1">
                    <div className="dz-media">
                      <Link to={"#"}>
                        <img src={item.images} alt="" />
                      </Link>
                      <ul className="team-social">
                        <li>
                          <Link
                            target="_blank"
                            to="https://www.facebook.com/"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            to="https://twitter.com/?lang=en"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            to="https://www.instagram.com/?hl=en"
                            rel="noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dz-content ">
                      <h4 className="dz-name">{item.title}</h4>
                      <span className="dz-position">{item.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="call-action style-1 footer-action">
          <div className="container">
            <NewsLetter />
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Team;
