import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        "service_gfykn6i",
        "template_iy1pb0b",
        e.target,
        "HccoOtZS6GHw-N-m6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    swal("Good job!", "form successfuly submmited", "success");
  };
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Contactanos" parentTitle="Home" />
        <div className="animate__animated animate__fadeInRightBig">
          ---
          <section className=" z-index-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-xl-5 m-sm-b30 m-xl-b0">
                <div className="contact-box">
                  <h3 className="contact-title">Informaci&oacute;n de Contacto </h3>
                  <p className="contact-text">
                   Llena la informaci&oacute;n y nuestro equipo se comunicara contigo
                    O llama a nuestros telefonos
                  </p>
                  <div className="widget widget_getintuch ">
                    <ul>
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                          Puerto  boyaca calle 9 #13 -25
                        </p>
                      </li>
                      <li>
                        <i className="fa-solid fa-phone"></i>
                        <p>111-222-3333</p>
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope"></i>
                        <p>elisamendel@andes.edu.co</p>
                      </li>
                    </ul>
                  </div>
                  <h6 className="m-b15 text-white">Nuestras redes sociales</h6>
                  <div className="dz-social-icon style-1 dark">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.facebook.com/"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.instagram.com/"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          to="https://twitter.com/"
                          rel="noreferrer"
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>{" "}
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
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_306_1296"
                        x1="118.877"
                        y1="35.552"
                        x2="250.365"
                        y2="35.552"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="var(--primary)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="col-md-6 col-xl-7">
                <form
                  className="dz-form dzForm style-1"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <div className="dzFormMsg"></div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-group input-line">
                        <input
                          name="dzFirstName"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group input-line">
                        <input
                          name="dzLastName"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Apellido"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzEmail"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Tu correo"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzPhoneNumber"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group input-line m-b30">
                        <textarea
                          name="dzMessage"
                          rows="5"
                          required
                          className="form-control"
                          placeholder="Mensaje..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-lg btn-skew"
                      >
                        <span>Contactenos</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="container content-inner-1">
          <div className="map-iframe">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28896.531392443423!2d75.81462525569334!3d25.133445080066668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x537f208422eb8f28!2sW3ITEXPERTS%20-%20Software%20Development%20Company%20in%20kota!5e0!3m2!1sen!2sin!4v1669897446044!5m2!1sen!2sin"
              style={{ border: "0", marginBottom: "-7px", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      ---
        </div>
        
        {/* <section className="call-action style-1 footer-action">
          <div className="container">
            <NewsLetter />
          </div>
        </section> */}
      </div>
    </>
  );
};

export default ContactUs;
