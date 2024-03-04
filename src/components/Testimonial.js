import React, { useRef } from "react";
import { IMAGES } from "../constants/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import circlebig from "../assets/images/pattern/circle-big.svg";
import circlebig2 from "../assets/images/pattern/circle-2.svg";

const carousel = [
  { image: IMAGES.avatarlarge1, text: "SportApp mejoró la forma en la cual gestiono mis entrenamientos", name: "Elisa Angulo" },
  { image: IMAGES.avatarlarge2, text: "SportApp permitio que mis rutinas fueran mas variadas y personalizadas a mis necesidades", name: "Camilo Guevara" },
  { image: IMAGES.avatarlarge3, text: "SportApp me ayudo a mejorar mis planes alimenticios", name: "Daniel Bustos" },
];


const avtarImg = [
  { img: IMAGES.avatarLargePic1, className: "avatar1" },
  { img: IMAGES.avatarLargePic2, className: "avatar2" },
  { img: IMAGES.avatarLargePic1, className: "avatar4" },
  { img: IMAGES.avatarLargePic3, className: "avatar6" },
];
const Testimonial = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="swiper swiper-fade testimonial-swiper swiper-btn-lr">
        <Swiper
          className="swiper-wrapper"
          loop={true}
          speed={1300}
          ref={swiperRef}
        >
          
          {carousel.map((item, ind) => (
          <SwiperSlide key={ind}>
            <div className="testimonial-1">
              <div className="testimonial-pic">
                <img src={item.image} alt="" />
              </div>
              <ul className="testimonial-rating">
                <li>
                  <i className="fa-solid fa-star"></i>
                  
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="testimonial-info">
                <p className="testimonial-text">{item.text}</p>
                <h4 className="testimonial-name">{item.name}</h4>
              </div>              

            </div>

            
          </SwiperSlide>
        ))}
        </Swiper>
          <div
            onClick={() => {
              swiperRef.current.swiper.slidePrev();
            }}
            className="testimonial-button-prev btn-prev"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
            className="testimonial-button-next btn-next"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
      </div>

      {avtarImg.map((item, ind) => (
        <div className={item.className} key={ind}>
          <img src={item.img} alt="" />
        </div>
      ))}
      <img className="svg-shape rotate-360" src={circlebig} alt="" />
      <img className="svg-shape-2 rotate-360" src={circlebig2} alt="" />
    </>
  );
};

export default Testimonial;
