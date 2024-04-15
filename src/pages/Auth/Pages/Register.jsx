import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import  {IMAGES}  from "../../../constants/theme";
import useRegisterUser from "../Hooks/useRegisterUser";
import { GetErrorBorder, SpinnerSportApp } from "../../Utils";
import { HeaderLogin, SocialNetwork } from "../components";
import useEmailExists from "../Hooks/useEmailExists";
import { Link, useNavigate } from "react-router-dom";
const Registro = () => {
  const [formValues] = useState(null);
  const { validateEmail, emailExists } = useEmailExists();
  const { createUser, loading, userCreated } = useRegisterUser();
  const navigate = useNavigate();
  const initialValuesObject = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    isUser: true,
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("El nombre es requerido."),
    lastName: Yup.string().required("Los apellidos son requeridos ."),
    email: Yup.string()
      .email("El email tiene un formato errado")
      .required("El email es requerido")
      .test("email-exists", "El email ya está registrado", async (value) => {
        await validateEmail(value.trim());
        return emailExists;
      }),
    password: Yup.string()
      .required("La contraseña es requerida")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Debe contener 8 caracteres, letras mayusculas y minisculas, y un caracter especial"
      ),
    confirmPassword: Yup.string()
      .required("La validacion contraseña es requerida")
      .oneOf(
        [Yup.ref("password")],
        "La confirmacion debe ser igual al password"
      ),
  });
  // istanbul ignore next
  const onSubmit = async (values) => {
    await createUser(values);
  };

  useEffect(() => {
    if (userCreated) navigate("/login");
  }, [userCreated]);

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
          <div className="flex m-1 ">
            <Form>
              <div>
                <HeaderLogin />
                <MDBContainer
                  fluid
                  className="background-radial-gradient overflow-hidden w-80 animate__animated animate__fadeInRightBig"
                  style={{ maxWidth: "80%" }}
                >
                  <MDBRow>
                    <MDBCol
                      md="5"
                      className="text-center text-md-start d-flex flex-column justify-content-center"
                    >
                      <MDBCardImage
                        src={IMAGES.portfolio7}
                        alt="login form"
                        className="rounded-start w-100"
                      />
                    </MDBCol>
                    <MDBCol md="7" className="position-relative">
                      <div
                        id="radius-shape-1"
                        className="position-absolute rounded-circle shadow-5-strong"
                      ></div>
                      <div
                        id="radius-shape-2"
                        className="position-absolute shadow-5-strong"
                      ></div>

                      <MDBCard className="my-5 bg-glass">
                        <MDBCardBody className="">
                          <div className="section-head">
                            <h2 className="title">
                              REGÍSTRATE EN <span>SPORTAPP</span>
                            </h2>
                          </div>

                          <MDBRow className="mb-4">
                            <MDBCol col="6">
                              <label htmlFor="firstName">Nombre(s)</label>
                              <Field
                                as={MDBInput}
                                id="firstName"
                                type="text"
                                name="firstName"
                                size="lg"
                                style={GetErrorBorder(
                                  formik.errors,
                                  "firstName"
                                )}
                              />
                              <ErrorMessage
                                className="text-red"
                                name="firstName"
                              >
                                {(errorMsg) => (
                                  <div className="text-red">{errorMsg}</div>
                                )}
                              </ErrorMessage>
                            </MDBCol>
                            <MDBCol col="6">
                              <label htmlFor="lastName">Apellidos(s)</label>
                              <Field
                                as={MDBInput}
                                id="lastName"
                                type="text"
                                name="lastName"
                                size="lg"
                                style={GetErrorBorder(
                                  formik.errors,
                                  "lastName"
                                )}
                              />
                              <ErrorMessage
                                className="text-red"
                                name="lastName"
                              >
                                {(errorMsg) => (
                                  <div className="text-red">{errorMsg}</div>
                                )}
                              </ErrorMessage>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mb-4">
                            <MDBCol col="12">
                              <label htmlFor="email">Email</label>
                              <Field
                                as={MDBInput}
                                id="email"
                                type="email"
                                name="email"
                                size="lg"
                                style={GetErrorBorder(formik.errors, "email")}
                              />
                              <ErrorMessage className="text-red" name="email">
                                {(errorMsg) => (
                                  <div className="text-red">{errorMsg}</div>
                                )}
                              </ErrorMessage>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mb-4">
                            <MDBCol col="12">
                              <label htmlFor="password">Contraseña</label>
                              <Field
                                as={MDBInput}
                                id="password"
                                type="password"
                                name="password"
                                size="lg"
                                style={GetErrorBorder(
                                  formik.errors,
                                  "password"
                                )}
                              />
                              <ErrorMessage
                                className="text-red"
                                name="password"
                              >
                                {(errorMsg) => (
                                  <div className="text-red">{errorMsg}</div>
                                )}
                              </ErrorMessage>
                            </MDBCol>
                          </MDBRow>

                          <MDBRow className="mb-4">
                            <MDBCol col="12">
                              <label htmlFor="confirmPassword">
                                Validar Contraseña
                              </label>
                              <Field
                                as={MDBInput}
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                size="lg"
                                style={GetErrorBorder(
                                  formik.errors,
                                  "confirmPassword"
                                )}
                              />
                              <ErrorMessage
                                className="text-red"
                                name="confirmPassword"
                              >
                                {(errorMsg) => (
                                  <div className="text-red">{errorMsg}</div>
                                )}
                              </ErrorMessage>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mb-4">
                            <MDBCol col="12">
                              <div className="form-check form-switch">
                                <label className="form-check-label" htmlFor="isUser">
                                  Quieres ser usuario?
                                </label>

                                <Field
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  name="isUser"
                                  id="isUser"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mb-4">
                            <MDBCol col="12">
                              <div className="d-flex justify-content-lg-center gap-4">
                                {!loading && (
                                  <button
                                    name="submit"
                                    value="Submit"
                                    type="submit"
                                    disabled={!formik.isValid}
                                    className="btn btn-primary btn-lg btn-skew "
                                  >
                                    <span>Registrarse</span>
                                  </button>
                                )}
                                {loading && <SpinnerSportApp />}
                                {!loading && (
                                  <Link
                                    to="/login"
                                    className="btn btn-secondary btn-lg btn-skew"
                                  >
                                    Cancelar
                                  </Link>
                                )}
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <SocialNetwork />
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Registro;
