import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../../elements/PageTitle";
import Card from "react-bootstrap/Card";
import { useRecomendationForUser } from "../Hooks/useRecomendationForUser";
import {
  SelectValidation,
  SpinnerSportApp,
  TextBoxEditValidation,
} from "../../Utils";
import { useEditRecommendation } from "../Hooks/useEditRecommendation";

export const EditRecommendation = () => {
  const params = useParams();
  const navigation = useNavigate();
  const classEditTextBox = " input-group mb-3  input-line";
  const id = params["id"];
  let inititializeData = {
    userId: "",
    userAsociateId: "",
    title: "",
    image: "",
    description: "",
    enrollServiceUserId: id,
    typeOfRecommendationId: "",
    tracking: {
      kgOfMuscleGained: 0,
      prInFlatBenchPress: 0,
      cmsInArm: 0,
      prInSquad: 0,
      userId: "",
      userAsociateId: "",
    },
  };

  const { recommendationUsers, getRecommendationUser } =
    useRecomendationForUser();

  const validationSchema = Yup.object({
    title: Yup.string().required("Digita el titulo"),
    image: Yup.string().required("Coloca la imagen"),
    description: Yup.string().required("Digita la descripcion"),
    typeOfRecommendationId: Yup.string().required(
      "Ingresa el tipo de recomendacion"
    ),
    tracking: Yup.object().shape({
      kgOfMuscleGained: Yup.number().required().min(0).max(50),
      prInFlatBenchPress: Yup.number().required().min(0).max(200),
      cmsInArm: Yup.number().min(0).required().max(70),
      prInSquad: Yup.number().min(0).required().max(200),
    }),
  });

  const {
    listRecommendations,
    loadingTypeOfRecommendation,
    getDataTracking,
    loadingSaveRecommendation,
    userRecommendationSave,
    saveRecommendation,
  } = useEditRecommendation();

  const onSubmit = async (values, e, valid) => {
    e.preventDefault();
    if (valid) {
      values.userId = recommendationUsers.userId;
      values.userAsociateId = recommendationUsers.userAsociateId;
      values.tracking.userId = recommendationUsers.userId;
      values.tracking.userAsociateId = recommendationUsers.userAsociateId;
      saveRecommendation(values);
    }
  };
  useEffect(() => {
    getRecommendationUser(id);
    getDataTracking();
  }, [id]); //

  useEffect(() => {
    if (userRecommendationSave) {
      navigation(`/user-tracking/${id}`);
    }
  }, [userRecommendationSave]);

  return (
    <Formik
      initialValues={inititializeData}
      enableReinitialize
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formik) => {
        return (
          <Form>
            <div className="page-content bg-white">
              <PageTitle
                parentTitle="Recomendacion"
                activePage={`Recomendacion para ${recommendationUsers.user?.name} ${recommendationUsers.user?.lastName}`}
              />
              {!loadingTypeOfRecommendation && (
                <div className="container">
                  <Card className="">
                    <Card.Body>
                      <Card.Title>Registro de perfil de usuario</Card.Title>
                      <Card.Text className="mt-5">
                        Registra tu recomendacion de{" "}
                        <b>{recommendationUsers.user?.name} </b> para el
                        servicio/producto {recommendationUsers?.serviceName}
                      </Card.Text>

                      <div className="row ">
                        <div className="col-6 animate__animated animate__fadeInLeftBig">
                          <div className="col-md-6 col-lg-12 col-sm-12 mr-3">
                            <TextBoxEditValidation
                              classDiv={classEditTextBox}
                              idText="image"
                              label="Imagen"
                              type="text"
                              formikForm={formik}
                            />

                            <TextBoxEditValidation
                              classDiv={classEditTextBox}
                              idText="title"
                              label="Recomendacion"
                              type="text"
                              formikForm={formik}
                            />

                            <SelectValidation
                              classDiv="input-group mb-3  input-line"
                              idSelect="typeOfRecommendationId"
                              label="Tipo de recomendacion"
                              formikForm={formik}
                              data={listRecommendations}
                              formFormik={formik}
                            ></SelectValidation>
                            <TextBoxEditValidation
                              classDiv={classEditTextBox}
                              idText="description"
                              label="Detalle"
                              type="text"
                              formikForm={formik}
                            />
                            <div className="row d-flex justify-content-around">
                              {!loadingSaveRecommendation && (
                                <button
                                  name="submit"
                                  value="Submit"
                                  type="submit"
                                  disabled={formik.isInValid}
                                  onClick={(e) =>
                                    onSubmit(formik.values, e, formik.isValid)
                                  }
                                  className="col-4  btn btn-primary btn-lg btn-skew"
                                >
                                  <span>Guardar</span>
                                </button>
                              )}
                              {loadingSaveRecommendation && <SpinnerSportApp />}
                              <Link
                                to={"/user-tracking/" + id}
                                className="col-4  btn btn-secondary btn-lg btn-skew"
                              >
                                Cancelar
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 animate__animated animate__fadeInRightBig">
                          <Tabs
                            defaultActiveKey="0"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                          >
                            <Tab eventKey="0" title="Seguimiento  al usuario">
                              <div className="row">
                                <TextBoxEditValidation
                                  classDiv={classEditTextBox}
                                  idText="tracking.kgOfMuscleGained"
                                  label="Kgs de musculo ganado"
                                  type="text"
                                  formikForm={formik}
                                />
                                <TextBoxEditValidation
                                  classDiv={classEditTextBox}
                                  idText="tracking.prInFlatBenchPress"
                                  label="Pr en press banca plana"
                                  type="text"
                                  formikForm={formik}
                                />
                                <TextBoxEditValidation
                                  classDiv={classEditTextBox}
                                  idText="tracking.cmsInArm"
                                  label="Cms en brazo"
                                  type="text"
                                  formikForm={formik}
                                />
                                <TextBoxEditValidation
                                  classDiv={classEditTextBox}
                                  idText="tracking.prInSquad"
                                  label="PR en sentadilla"
                                  type="text"
                                  formikForm={formik}
                                />
                              </div>
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>
            {/* <pre> {JSON.stringify(formik.values, null, 2)} </pre> */}
          </Form>
        );
      }}
    </Formik>
  );
};
