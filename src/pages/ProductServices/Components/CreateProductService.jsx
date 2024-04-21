import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";
import { useEffect } from "react";
import {
  ArrayCheckBoxes,
  CheckBoxValidation,
  SelectValidation,
  TextBoxEditValidation,
} from "../../Utils";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useCreateProductService } from "../Hooks/useCreateProductService";
export const CreateProductService = () => {
  const product = useParams();
  const classEditTextBox = " input-group mb-3  input-line";
  const {
    initialProduct,
    GetInitialInformation,
    productLoading,
    countriesUP,
    statesUP,
    citiesUP,
    setProductCreated,
    changeNewCountry,
    changeNewState,
    typesOfNutritionUP,
    nutricionalAllergiesUP,
    physicalLevelsUP,
    activitiesUP,
    goalsUP,
    createProduct,
    loadingUpdateProfile,
    productCreated,
    categoriesUp,
    serviceTypesUP,
    changeNewCategory,
    plansUp,
    eventSelected
  } = useCreateProductService();
  const navigation = useNavigate();
  useEffect(() => {
    GetInitialInformation(product);
  }, []);

  const validationSchema = Yup.object().shape({
    //userId: "",
    name: Yup.string().required("El nombre es requerido."),
    description: Yup.string().required("La descripción es requerida."),
    picture: Yup.string().required("La imagen es requerida."),
    cityId: Yup.string().required("Selecciona tu ciudad"),
    planId: Yup.string().required("Selecciona tu plan"),
    sportLevel: Yup.string().required("Selecciona tu nivel")
  });
  // istanbul ignore next
  const onSubmit = async (values) => {
    await createProduct(values);
  };

  useEffect(() => {
    if (productCreated) {
      navigation("/product-services");
    }
  }, [productCreated]);
  return (
    <>
      {!productLoading && (
        <Formik
          initialValues={initialProduct}
          enableReinitialize
          onSubmit={(values) => {
            onSubmit(values);
          }}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
        >

          {(formik) => {
            // istanbul ignore next
            return (
              <Form>
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12 mr-3  animate__animated animate__backInLeft">
                    <TextBoxEditValidation
                      classDiv={classEditTextBox}
                      idText="name"
                      label="Nombre"
                      type="text"
                      formikForm={formik}
                    />
                    <TextBoxEditValidation
                      classDiv={classEditTextBox}
                      idText="description"
                      label="Descripción"
                      type="text"
                      formikForm={formik}
                    />
                    <div className="input-group mb-3  input-line">
                      <label
                        className="input-group-text"
                        htmlFor="categoryId"
                      >
                        Categoria
                      </label>
                      <Field
                        id="categoryId"
                        as="select"
                        name="categoryId"
                        className="form-control"
                        size="lg"
                        onChange={(e) => {
                          formik.setFieldValue(
                            "categoryId",
                            e.target.value
                          );
                          changeNewCategory(e.target.value);
                          formik.setFieldValue("serviceTypeId", "");
                        }}
                      >
                        <option value="0">Selecciona</option>
                        {categoriesUp.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <SelectValidation
                      classDiv="input-group mb-3  input-line"
                      idSelect="serviceTypeId"
                      label="Tipo de servicio"
                      formikForm={formik}
                      data={serviceTypesUP}
                      formFormik={formik}
                    ></SelectValidation>
                    {!eventSelected && (<TextBoxEditValidation
                      classDiv={classEditTextBox}
                      idText="price"
                      label="Precio"
                      type="number"
                      formikForm={formik}
                    />)}
                    <SelectValidation
                      classDiv="input-group mb-3  input-line"
                      idSelect="planId"
                      label="Tipo de plan"
                      formikForm={formik}
                      data={plansUp}
                      formFormik={formik}
                    ></SelectValidation>
                    <TextBoxEditValidation
                      classDiv={classEditTextBox}
                      idText="picture"
                      label="Imágen"
                      type="text"
                      formikForm={formik}
                    />
                    {eventSelected && (<TextBoxEditValidation
                      classDiv={classEditTextBox}
                      idText="startDateTime"
                      label="Fecha de inicio"
                      type="datetime-local"
                      formikForm={formik}
                    />)}
                    {eventSelected && (<TextBoxEditValidation
                      classDiv={classEditTextBox}
                      idText="endDateTime"
                      label="Fecha de Finalización"
                      type="datetime-local"
                      formikForm={formik}
                    />)}
                    {!loadingUpdateProfile && (
                      <div className="row d-flex justify-content-around mb-4">
                        <button
                          type="submit"
                          disabled={Object.keys(formik.errors).length !== 0}
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
                        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
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
                      <Tab eventKey="0" title="Perfil Geografico servicio">
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
                                  formik.setFieldValue("stateId", "");
                                  formik.setFieldValue("cityId", "");
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
                                  formik.setFieldValue("cityId", "");
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
                      {!eventSelected && (<Tab eventKey="1" title="Perfil alimenticio - alimento">
                        <div className="row animate__animated animate__fadeInUpBig">
                          <ArrayCheckBoxes
                            data={nutricionalAllergiesUP}
                            nameGroup="nutritionalAllergies"
                            label="Restricciones para alergias"
                            classDivMain={classEditTextBox}
                            values={formik.values}
                            formikForm={formik}
                            formFormik={formik}
                          />
                          <SelectValidation
                            classDiv="input-group mb-3  input-line"
                            idSelect="typeOfNutritionId"
                            label="Alimento orientado a"
                            formikForm={formik}
                            data={typesOfNutritionUP}
                            formFormik={formik}
                          ></SelectValidation>
                        </div>
                      </Tab>)}
                      <Tab eventKey="2" title="Perfil deportivo servicio">
                        <div className="row  animate__animated animate__fadeInUpBig">
                          <div className="col-md-12 col-lg-12 col-sm-12">

                            <SelectValidation
                              classDiv="input-group mb-3  input-line"
                              idSelect="sportLevel"
                              label="Nivel físico requerido"
                              formFormik={formik}
                              data={physicalLevelsUP}
                              formikForm={formik}
                            ></SelectValidation>

                            <ArrayCheckBoxes
                              data={activitiesUP}
                              nameGroup="activities"
                              label="Actividades Relacionadas"
                              classDivMain={classEditTextBox}
                              values={formik.values}
                            />

                            <ArrayCheckBoxes
                              data={goalsUP}
                              nameGroup="goals"
                              label="Enfoque del plan"
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
      {productLoading && <SpinnerSportApp />}

    </>
  );
};