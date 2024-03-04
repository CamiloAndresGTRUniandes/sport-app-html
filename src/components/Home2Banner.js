import React from "react";
import { IMAGES } from "../constants/theme";
import { Link } from "react-router-dom";

const Home2Banner = ({ open }) => {
  return (
    <>
      <div
        className="banner-inner"
        style={{ backgroundImage: `url(${IMAGES.SliderBg2})` }}
      >
        <h2 className="data-text">
          <span>S</span>
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>A</span>
          <span>P</span>
          <span>P</span>
        </h2>
        <div className="container">
          <div className="banner-content">
            <h1 className="title">
              <span className="right anm wow fadeInUp"> SPORTAPP</span>
            </h1>
            <div className="row wow fadeInUp" data-wow-delay="0.4s">
              <div className="col-4">
                <div className="bottom-content">
                  <p>
                    ¡Transforma tu estado físico con SPORTAPP, tu compañero definitivo para alcanzar tus metas de bienestar!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-media media1 anm wow fadeInUp">
            <img src={IMAGES.Slide2eli} alt="" />
          </div>
        </div>
        <div className="video-bx5">
          <Link
            onClick={() => {
              open(true);
            }}
            className="popup-youtube"
            to="#"
          >
            
          </Link>
        </div>

      </div>
    </>
  );
};

export default Home2Banner;
