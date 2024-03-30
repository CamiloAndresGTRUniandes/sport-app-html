import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { TextBoxEditValidation } from "../../Utils/TextBoxEditValidation";
import { useEditUserProfile } from "../Hooks/useEditUserProfile";
import { SpinnerSportApp } from "../../../components/SpinnerSportApp";
import { useEffect } from "react";
import { SelectValidation } from "../../Utils/SelectValidation";

export const EditUserProfile = () => {
  const classEditTextBox = " input-group mb-5  input-line";
  const {
    GetUserProfile,
    userProfile,
    userLoading,
    genresUP,
    countriesUP,
    statesUP,
    citiesUP,
    changeNewCountry,
    changeNewState,
  } = useEditUserProfile();
  useEffect(() => {
    GetUserProfile();
  }, []);

  const validationSchema = Yup.object({
    userId: "",
    name: Yup.string().required("El nombre es requerido."),
    lastName: Yup.string().required("Los apellidos son requeridos ."),
    email: Yup.string()
      .email("El email tiene un formato errado")
      .required("El email es requerido"),
    phoneNumber: Yup.string(),
    dateOfBirth: Yup.date().required("Tu fecha de nacimiento es requerida"),
    genreId: Yup.number().required("Selecciona tu género").min(1),
    countryId: Yup.number().required("Selecciona tu pais").min(1),
    stateId: Yup.number().required("Selecciona tu estado").min(1),
    cityId: Yup.number().required("Selecciona tu ciudad").min(1),
  });

  const onSubmit = async (values) => {
    console.log("my values", values);
  };

  return (
    <>
      {!userLoading && (
        <Formik
          initialValues={userProfile}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {(formik) => {
            return (
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 mr-3">
                  <TextBoxEditValidation
                    classDiv={classEditTextBox}
                    idText="name"
                    label="Nombre(s)"
                    type="text"
                    formikForm={formik}
                  />

                  <TextBoxEditValidation
                    classDiv={classEditTextBox}
                    idText="lastName"
                    label="Apellidos"
                    type="text"
                    formikForm={formik}
                  />

                  <TextBoxEditValidation
                    classDiv={classEditTextBox}
                    idText="email"
                    label="Email"
                    type="email"
                    formikForm={formik}
                  />
                  <TextBoxEditValidation
                    classDiv={classEditTextBox}
                    idText="phoneNumber"
                    label="Telefono"
                    type="phoneNumber"
                    formikForm={formik}
                  />

                  <TextBoxEditValidation
                    classDiv={classEditTextBox}
                    idText="dateOfBirth"
                    label="Fecha de nacimiento"
                    type="date"
                    formikForm={formik}
                  />

                  <SelectValidation
                    classDiv="input-group mb-3  input-line"
                    idSelect="genreId"
                    label="Genero"
                    formikForm={formik}
                    data={genresUP}
                    formFormik={formik}
                  ></SelectValidation>

                  <TextBoxEditValidation
                    classDiv={classEditTextBox}
                    idText="age"
                    label="Edad"
                    type="number"
                    formikForm={formik}
                  />

                  <div className="row d-flex justify-content-around">
                    <button
                      name="submit"
                      type="button"
                      value="Submit"
                      className="col-4  btn btn-primary btn-lg btn-skew"
                    >
                      <span>Guardar</span>
                    </button>
                    <button
                      name="submit"
                      type="button"
                      className="col-4  btn btn-secondary btn-lg btn-skew"
                    >
                      <span>Cancelar</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <Tabs
                    defaultActiveKey="0"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="0" title="Perfil Geografico">
                      <div className="row  animate__animated animate__fadeInUpBig">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                          <div className="input-group mb-3  input-line">
                            <label
                              className="input-group-text"
                              htmlFor="stateId"
                            >
                              Pais
                            </label>
                            <Field
                              id="countryId"
                              as="select"
                              name="countryId"
                              className="form-control"
                              size="lg"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "countryId",
                                  e.target.value
                                );
                                changeNewCountry(e.target.value);
                                formik.setFieldValue("stateId", 0);
                                formik.setFieldValue("cityId", 0);
                              }}
                            >
                              <option value="0">Selecciona</option>
                              {countriesUP.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                            </Field>
                          </div>

                          <div className="input-group mb-3  input-line">
                            <label
                              className="input-group-text"
                              htmlFor="stateId"
                            >
                              Estados
                            </label>
                            <Field
                              id="stateId"
                              as="select"
                              name="stateId"
                              className="form-control"
                              size="lg"
                              onChange={(e) => {
                                formik.setFieldValue("stateId", e.target.value);
                                changeNewState(e.target.value);
                                formik.setFieldValue("cityId", 0);
                              }}
                            >
                              <option value="0">Selecciona</option>
                              {statesUP.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                            </Field>
                          </div>

                          <SelectValidation
                            classDiv="input-group mb-3  input-line"
                            idSelect="cityId"
                            label="Ciudad"
                            formikForm={formik}
                            data={citiesUP}
                            formFormik={formik}
                          ></SelectValidation>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="1" title="Perfil alimenticio">
                      <div className="row animate__animated animate__fadeInUpBig">
                        <div className="input-group mb-3  input-line">
                          <span
                            className="input-group-text"
                            id="tienesAlergias"
                          >
                            Tienes alergias
                          </span>
                          {
                            <Field // prettier-ignore
                            type="checkbox"
                              id="custom-switch"
                            />
                          }
                        </div>

                        <div className="input-group mb-3   ml-5 p-1 input-line">
                          <span
                            className="input-group-text ml-5"
                            id="cualesAlergias"
                          >
                            Cuales alergias?
                          </span>
                          {["checkbox"].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                              {/* <Form.Check
                            inline
                            variant="dark"
                            label="Lacteos"
                            className="mt-3"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            variant="dark"
                            label="Gluten"
                            className="mt-3"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            inline
                            variant="dark"
                            label="Frutos Secos"
                            className="mt-3"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          /> */}
                            </div>
                          ))}
                        </div>

                        <div className="input-group mb-3  input-line">
                          <span
                            className="input-group-text"
                            id="alergiasMedicas"
                          >
                            Tienes alergias medicas
                          </span>
                          {/* <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                      /> */}
                        </div>

                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="tipoDeDieta">
                            Tipo de dieta?
                          </span>
                          <select
                            className="form-control"
                            aria-label="tipoDeDieta"
                          >
                            <option value="1">Vegatariano</option>
                            <option value="2">Vegano</option>
                            <option value="3">Carnivoro</option>
                            <option value="4">Omnivoro</option>
                            <option value="5">Frutivoro</option>
                          </select>
                        </div>

                        <div className="col-md-12 col-lg-12 col-sm-12">
                          <div className="input-group mb-3  input-line">
                            <span
                              className="input-group-text"
                              id="promedioCaloriasDiarias"
                            >
                              Promedio de consumo de calorias diarias?
                            </span>
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              aria-label="promedioCaloriasDiarias"
                              aria-describedby="verdurasSemana"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="2" title="Perfil deportivo">
                      <div className="row  animate__animated animate__fadeInUpBig">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                          <div className="input-group mb-3  input-line">
                            <span
                              className="input-group-text"
                              id="ejercicioSemana"
                            >
                              Cuantas veces haces ejercicio por semana?
                            </span>
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              aria-label="ejercicioSemana"
                              aria-describedby="ejercicioSemana"
                            />
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="nivelFisico">
                              Nivel Fisico
                            </span>
                            <select
                              className="form-control"
                              aria-label="nivelFisico"
                            >
                              <option value="1">Basico</option>
                              <option value="2">Medio</option>
                              <option value="3">Avanzado</option>
                            </select>
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span
                              className="input-group-text"
                              id="tienesLesiones"
                            >
                              Tienes lesiones
                            </span>
                            {/* <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="mt-2 secondary"
                          aria-label="tienesLesiones"
                          aria-describedby="tienesLesiones"
                        /> */}
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="lessiones">
                              Que lessiones tienes?
                            </span>
                            <textarea
                              type="Area"
                              className="form-control"
                              placeholder=""
                              aria-label="lessiones"
                              aria-describedby="lessiones"
                            />
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="peso">
                              Peso
                            </span>
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              aria-label="peso"
                              aria-describedby="peso"
                            />
                          </div>

                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="Estatura">
                              Estatura
                            </span>
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              aria-label="Estatura"
                              aria-describedby="Estatura"
                            />
                          </div>
                          <div className="input-group mb-1  p-3 input-line">
                            <span className="input-group-text" id="lessiones">
                              Actividades deportivas favoritas
                            </span>
                            {["checkbox"].map((type) => (
                              <div key={`inline-${type}`} className="mb-3">
                                {/* <Form.Check
                              inline
                              variant="dark"
                              label="Futbol"
                              className="mt-3"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              variant="dark"
                              label="Basket"
                              className="mt-3"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              inline
                              variant="dark"
                              label="Ciclismo"
                              className="mt-3"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              inline
                              label="Zumba"
                              variant="dark"
                              className="mt-3"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              inline
                              variant="dark"
                              label="Correr"
                              className="mt-3"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            /> */}
                              </div>
                            ))}
                          </div>
                          <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="input-group mb-3  p-1 input-line">
                              <span className="input-group-text" id="lessiones">
                                Cuales son tus metas?
                              </span>
                              {["checkbox"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  {/* <Form.Check
                                inline
                                variant="dark"
                                label="Ganar peso"
                                className="mt-3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                inline
                                variant="dark"
                                label="Mejorar resistencia"
                                className="mt-3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                inline
                                variant="dark"
                                label="Construir musculo"
                                className="mt-3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                inline
                                label="Perder peso"
                                variant="dark"
                                className="mt-3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                inline
                                variant="dark"
                                label="Aumentar Frexibilidad"
                                className="mt-3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />

                              <Form.Check
                                inline
                                variant="dark"
                                label="Aumentar Fuerza"
                                className="mt-3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />

                              <Form.Check
                                inline
                                variant="dark"
                                label="Mejorar Flexibilidad"
                                className="mt-3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              /> */}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                  <pre>{JSON.stringify(formik.values, null, 2)}</pre>
                </div>
              </div>
            );
          }}
        </Formik>
      )}
      {userLoading && <SpinnerSportApp />}
    </>
  );
};
