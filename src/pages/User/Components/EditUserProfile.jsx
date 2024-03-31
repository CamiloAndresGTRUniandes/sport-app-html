import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Alerts } from "../../Utils/Alerts";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEditUserProfile } from "../Hooks/useEditUserProfile";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";
import { useEffect } from "react";
import {
  ArrayCheckBoxes,
  CheckBoxValidation,
  SelectValidation,
  TextBoxEditValidation,
} from "../../Utils";
import { Link, useNavigate } from "react-router-dom";

export const EditUserProfile = () => {
  const classEditTextBox = " input-group mb-3  input-line";
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
    typesOfNutritionUP,
    nutricionalAllergiesUP,
    physicalLevelsUP,
    activitiesUP,
    goalsUP,
    updateUser,
    loadingUpdateProfile,
    userUpdated,
  } = useEditUserProfile();
  useEffect(() => {
    GetUserProfile();
  }, []);
  const navigation = useNavigate();
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
    nutrionalProfile: Yup.object().shape({
      averagesCaloriesPerDay: Yup.number()
        .required("Promedio de consumo de calorias diarias")
        .min(1),
      hasAllergies: Yup.boolean(),
      hasMedicalAllergies: Yup.boolean(),
      typeOfNutritionId: Yup.number()
        .required("Selecciona tu tipo de dieta")
        .min(1),
    }),
    sportProfile: Yup.object().shape({
      excerciseByWeek: Yup.number().required("Campo requerido").min(0),
      physicalLevelId: Yup.number().required("Selecciona tu nivel").min(1),
      whatInjuries: Yup.string(),
      hasInjuries: Yup.boolean(),
      weight: Yup.number().required("Ingresa tu peso").min(1),
      heigth: Yup.number().required("Ingresa tu altura").min(1),
    }),
  });

  const onSubmit =async (values) => {
   await updateUser(values);
  };

  useEffect(() => {
    if (userUpdated) {
      navigation("/");
    }
  }, [userUpdated]);
  return (
    <>
      {!userLoading &&  (
        <Formik
          initialValues={userProfile}
          enableReinitialize
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {(formik) => {
            return (
              <Form>
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12 mr-3  animate__animated animate__backInLeft">
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
                    {/* <div className={classEditTextBox}>
                        <span>{formik.values.age}</span>  
                    </div>   */}
                    <TextBoxEditValidation
                      classDiv={classEditTextBox}
                      idText="age"
                      label="Edad"
                      type="number"
                      formikForm={formik}
                    />
                    {!loadingUpdateProfile && (
                      <div className="row d-flex justify-content-around mb-4">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          // onClick={() => {
                          //   formik.touch();
                          //   if (formik.isValid) {
                          //     onSubmit(formik.values);
                          //   }
                          // }}
                          disabled={formik.isInValid}
                          className="col-4  btn btn-primary btn-lg btn-skew"
                        >
                          <span>Guardar</span>
                        </button>
                        <Link
                          to="/"
                          className="col-4  btn btn-secondary btn-lg btn-skew"
                        >
                          Cancelar
                        </Link>
                      </div>
                    )}

                    {loadingUpdateProfile && (
                      <div className="row d-flex justify-content-around mb-4">
                        <SpinnerSportApp />
                      </div>
                    )}
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
                                  formik.setFieldValue(
                                    "stateId",
                                    e.target.value
                                  );
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
                          <CheckBoxValidation
                            classDiv={classEditTextBox}
                            formikForm={formik}
                            idCheck="nutrionalProfile.hasMedicalAllergies"
                            label="Tienes alergias medicas?"
                          />
                          <SelectValidation
                            classDiv="input-group mb-3  input-line"
                            idSelect="nutrionalProfile.typeOfNutritionId"
                            label="Tipo de dieta?"
                            formikForm={formik}
                            data={typesOfNutritionUP}
                            formFormik={formik}
                          ></SelectValidation>

                          <TextBoxEditValidation
                            classDiv={classEditTextBox}
                            idText="nutrionalProfile.averagesCaloriesPerDay"
                            label="Promedio de consumo de calorias diarias"
                            type="number"
                            formikForm={formik}
                          />

                          <CheckBoxValidation
                            classDiv={classEditTextBox}
                            formikForm={formik}
                            idCheck="nutrionalProfile.hasAllergies"
                            label="Tienes alergias alimenticias?"
                          />

                          <ArrayCheckBoxes
                            data={nutricionalAllergiesUP}
                            nameGroup="nutricionalAllergies"
                            label="Cuales alergias?"
                            classDivMain={classEditTextBox}
                            values={formik.values}
                          />
                        </div>
                      </Tab>
                      <Tab eventKey="2" title="Perfil deportivo">
                        <div className="row  animate__animated animate__fadeInUpBig">
                          <div className="col-md-12 col-lg-12 col-sm-12">
                            <TextBoxEditValidation
                              classDiv={classEditTextBox}
                              idText="sportProfile.excerciseByWeek"
                              label="Cuantas veces haces ejercicio por semana?"
                              type="number"
                              formikForm={formik}
                            />

                            <SelectValidation
                              classDiv="input-group mb-3  input-line"
                              idSelect="sportProfile.physicalLevelId"
                              label="Cual es tu nivel Fisico?"
                              formFormik={formik}
                              data={physicalLevelsUP}
                              formikForm={formik}
                            ></SelectValidation>

                            <CheckBoxValidation
                              classDiv={classEditTextBox}
                              formikForm={formik}
                              idCheck="sportProfile.hasInjuries"
                              label="Tienes lesiones?"
                            />
                            <TextBoxEditValidation
                              classDiv={classEditTextBox}
                              idText="sportProfile.whatInjuries"
                              label="Que lessiones tienes?"
                              type="area"
                              formikForm={formik}
                            />

                            <TextBoxEditValidation
                              classDiv={classEditTextBox}
                              idText="sportProfile.weight"
                              label="Cual es tu peso (Kilos)? "
                              type="number"
                              formikForm={formik}
                            />
                            <TextBoxEditValidation
                              classDiv={classEditTextBox}
                              idText="sportProfile.heigth"
                              label="Cual es tu altura (cms)? "
                              type="number"
                              formikForm={formik}
                            />

                            <ArrayCheckBoxes
                              data={activitiesUP}
                              nameGroup="activities"
                              label="Cuales son tus actividades deportivas favoritas?"
                              classDivMain={classEditTextBox}
                              values={formik.values}
                            />
                            <ArrayCheckBoxes
                              data={goalsUP}
                              nameGroup="goals"
                              label="Cuales son tus metas en sport App?"
                              classDivMain={classEditTextBox}
                              values={formik.values}
                            />
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
      {userLoading && <SpinnerSportApp />}
    </>
  );
};
