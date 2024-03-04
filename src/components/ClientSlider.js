import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
import { IMAGES } from "../constants/theme";

const dataBlog = [
  { image: IMAGES.avatarlarge1, text: "SportApp mejoró la forma en la cual gestiono mis entrenamientos", name: "Elisa Angulo" },
  { image: IMAGES.avatarlarge2, text: "SportApp permitio que mis rutinas fueran mas variadas y personalizadas a mis necesidades", name: "Camilo Guevara" },
  { image: IMAGES.avatarlarge3, text: "SportApp me ayudo a mejorar mis planes alimenticios", name: "Daniel Bustos" },
];

function ClientSlider() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <>
      <Swiper
        className="testimonial-swiper"
        // centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        speed={1500}
        pagination={{
          el: ".swiper-pagination",
          
          clickable: true,
          renderBullet: function (index, className) {            
            return (
              '<span class="' + className + '"> 0' + (index + 1) + "</span>"
            );
          },
        }}
        //autoplay= {{
        //    delay: 4500,
        //}}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation, Pagination]}
      >
        {dataBlog.map((item, ind) => (
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

        <div className="num-pagination">
          <div
            className="testimonial-button-prev btn-prev"
            ref={navigationPrevRef}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="swiper-pagination style-1" ref={paginationRef}></div>
          <div
            className="testimonial-button-next btn-next"
            ref={navigationNextRef}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </Swiper>
    </>
  );
}
export default ClientSlider;
