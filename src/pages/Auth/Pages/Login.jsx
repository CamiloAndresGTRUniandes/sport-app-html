import { ErrorMessage, Form, Formik, Field } from "formik";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";
import * as Yup from "yup";
import getErrorBorder from "../../Utils/getErrorBorder";
import modelImage from "../../../assets/images/main-slider/slider2/hero.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBRow,
} from "mdb-react-ui-kit";

const Login = () => {
  const [formValues, setFormValues] = useState(null);
  const { LoginUser, loadingUser, credentials } = useLogin("x");

  const initialValuesObject = {
    email: "",
    password: "",
  };

  const savedValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Este campo es obligatorio."),
    email: Yup.string()
      .email("El email tiene un formato errado")
      .required("El email es requerido"),
  });

  const onSubmit = (values) => {
    LoginUser(values);
  };

 
  return (
    <Formik
      initialValues={formValues || initialValuesObject}
      enableReinitialize // decide  your form could be  change values after of loading
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formik) => {
        return (
          <div className="flex m-5">
            <Form>
              <div>
                <MDBNavbar expand="lg" light bgColor="light">
                  <MDBContainer fluid>
                    <MDBNavbarNav right className="d-flex flex-row">
                      <MDBNavbarItem>
                        <Link
                          to="/"
                          className="small text-muted"
                          style={{ color: "#393f81" }}
                        >
                          <div className="section-head">
                            <h2 className="title">
                              <span>SPORTAPP</span>
                            </h2>
                          </div>
                        </Link>
                      </MDBNavbarItem>
                    </MDBNavbarNav>
                  </MDBContainer>
                </MDBNavbar>
                <MDBContainer className="my-5">
                  <MDBCard>
                    <MDBRow className="g-0">
                      <MDBCol md="6">
                        <MDBCardImage
                          src={modelImage}
                          alt="login form"
                          className="rounded-start w-100"
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBCardBody className="d-flex flex-column">
                          <div className="d-flex flex-row mt-2">
                            <div className="section-head">
                              <h2 className="title">
                                Bienvenido a <span>SPORTAPP</span>
                              </h2>
                            </div>
                          </div>

                          <h5
                            className="fw-normal my-4 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Acceder a tu cuenta
                          </h5>
                          <div className="mb-4">
                            <label htmlFor="name">Email</label>
                            <Field
                              as={MDBInput}
                              id="email"
                              type="email"
                              name="email"
                              size="lg"
                              style={getErrorBorder(formik.errors, "email")}
                            />
                            <ErrorMessage className="text-red" name="email">
                              {(errorMsg) => (
                                <div className="text-red">{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>

                          <div className="mb-4">
                            <label htmlFor="name">Contraseña</label>
                            <Field
                              as={MDBInput}
                              id="password"
                              type="password"
                              size="lg"
                              style={getErrorBorder(formik.errors, "password")}
                            />
                            <ErrorMessage className="text-red" name="password">
                              {(errorMsg) => (
                                <div className="text-red">{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                          <div className="d-flex justify-content-center mb-4">
                            {!loadingUser && (
                              <button
                                name="submit"
                                value="Submit"
                                type="submit"
                                disabled={!formik.isValid}
                                className="btn btn-primary btn-lg btn-skew mt-3"
                              >
                                <span>Iniciar sesion</span>
                              </button>
                            )}
                            {loadingUser && (
                              <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            )}
                          </div>

                          <div className="mb-5"></div>

                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            No tienes cuenta?{" "}
                            <Link
                              to="/register"
                              className="small text-info"
                             
                            >
                              Registrarse aquí
                            </Link>
                          </p>
                          <div className="d-flex flex-row justify-content-start">
                            <a href="#!" className="small text-info me-1">
                              Términos de uso.
                            </a>
                            <a href="#!" className="small text-info">
                              Política de privacidad
                            </a>
                          </div>

                          <footer
                            className="site-footer style-1 bg-img-fix footer-action"
                            id="footer"
                          >
                            <div className="footer-bottom">
                              <div className="text-center">
                                <span className="copyright-text">
                                  Copyright © 2024{" "}
                                  <Link
                                    to="https://uniandes.edu.co/"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Grupo-13
                                  </Link>
                                  . Todos los derechos reservados
                                </span>
                              </div>
                            </div>
                          </footer>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </MDBContainer>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
