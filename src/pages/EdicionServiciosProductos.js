import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";

import { Link } from "react-router-dom";
const EdicionServiciosProductos = () => {
  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage="Edicion Zumba Tatan" parentTitle="Socios" />
        <div
          className=""
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row col-12 ">
              <Card className='animate__animated animate__fadeInRightBig' >
                <Card.Body>
                  <Card.Title>Edici&oacute;n producto o servicio</Card.Title>

                  <div className="row">
                    <div className="col-6 col-sm-6">
                      <div className="row">
                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="nombre">Nombre</span>
                          <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="nombre" value="Zumba" />
                        </div>

                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="description">Descripcion</span>
                          <input type="text" className="form-control" placeholder="" aria-label="description" aria-describedby="description" value="my description" />
                        </div>


                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="categoria">Categoria</span>
                          <select className="form-control" aria-label="categoria">
                            <option value="1">Servicio</option>
                            <option value="2">Producto Gym  </option>
                            <option value="3">Alimento </option>

                          </select>


                        </div>
                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="tipoServicio">Tipo de servicio</span>
                          <select className="form-control" aria-label="tipoServicio">
                            <option value="1">Nutricion</option>
                            <option value="2">Planes personalizados</option>
                            <option value="3">Elementos Deportivos </option>
                            <option value="4">Evento </option>
                          </select>

                          
                        </div>

                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="valor" >Valor</span>
                          <input type="text" className="form-control" placeholder="" aria-label="valor" aria-describedby="valor" value="$150.000" />
                        </div>

                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="tipoPlan">Tipo de plan</span>
                          <select className="form-control" aria-label="tipoPlan">
                            <option value="1">Basico</option>
                            <option value="2">Standar</option>
                            <option value="3">Premium</option>
                            <option value="4">Free</option>
                          </select>
                        </div>
                        <div className="input-group mb-3  input-line">
                          <span className="input-group-text" id="imagen" >imagen</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="imagen"
                            aria-describedby="imagen"
                            value="http:/pinteres/image.png---esto es una uri"
                          />
                        </div>

                      </div>
                      <div className="row d-flex justify-content-around" >
                        <Link to={"/productos-servicios"}
                          className="col-3  btn btn-primary shadow-primary btn-skew  mt-2">
                          Guardar
                        </Link>

                        <Link to={"/productos-servicios"}
                          className="col-3  btn btn-dark shadow-primary btn-skew  mt-2">
                          Cancelar
                        </Link>


                      </div>


                    </div>


                    <div className='col-md-6 col-lg-6 col-sm-12'>
                      <Tabs
                        defaultActiveKey="0"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="0" title="Perfil Geografico Servicio">
                          <div className='row  animate__animated animate__fadeInUpBig'>
                            <div className='col-md-12 col-lg-12 col-sm-12'>
                              <div className="input-group mb-3  input-line">
                                <span className="input-group-text" id="pais">Pais</span>
                                <select className="form-control" aria-label="pais">
                                  <option value="1">Colombia</option>
                                  <option value="2">Ecuador</option>
                                </select>
                              </div>

                              <div className="input-group mb-3  input-line">
                                <span className="input-group-text" id="Estado">Estado</span>
                                <select className="form-control" aria-label="Estado">
                                  <option value="1">Antioquia</option>
                                  <option value="2">Bogota</option>
                                </select>
                              </div>
                              <div className="input-group mb-3  input-line">
                                <span className="input-group-text" id="Ciudad">Ciudad</span>
                                <select className="form-control" aria-label="Ciudad">
                                  <option value="1">Medellin</option>
                                  <option value="2">Bello</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="1" title="Perfil alimenticio-Alimento">
                          <div className='row animate__animated animate__fadeInUpBig'>
                            <div className="input-group mb-3   ml-5 p-1 input-line">
                              <span className="input-group-text ml-5" id="cualesAlergias">Restricciones para alergias?</span>
                              {['checkbox',].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    variant="dark"
                                    label="Lacteos"
                                    className='mt-3'
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    variant="dark"
                                    label="Gluten"
                                    className='mt-3'
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                  <Form.Check
                                    inline
                                    variant="dark"
                                    label="Frutos Secos"
                                    className='mt-3'
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />

                                </div>



                              ))}
                            </div>
                            <div className="input-group mb-3  input-line">
                              <span className="input-group-text" id="tipoDeDieta">Alimento orientado a ?</span>
                              <select className="form-control" aria-label="tipoDeDieta">
                                <option value="1">Vegatariano</option>
                                <option value="2">Vegano</option>
                                <option value="3">Carnivoro</option>
                                <option value="4">Omnivoro</option>
                                <option value="5">Frutivoro</option>
                              </select>
                            </div>
{/* 
                            <div className='col-md-12 col-lg-12 col-sm-12'>
                              <div className="input-group mb-3  input-line">
                                <span className="input-group-text" id="promedioCaloriasDiarias">Calorias del producto</span>
                                <input type="number" className="form-control" placeholder="" aria-label="promedioCaloriasDiarias" aria-describedby="verdurasSemana" />
                              </div>

                            </div> */}
                          </div>
                        </Tab>
                        <Tab eventKey="2" title="Perfil deportivo Servicio">
                          <div className='row  animate__animated animate__fadeInUpBig'>

                            <div className='col-md-12 col-lg-12 col-sm-12'>

                              <div className="input-group mb-3  input-line">
                                <span className="input-group-text" id="nivelFisico">Nivel Fisico</span>
                                <select className="form-control" aria-label="nivelFisico">
                                  <option value="1">Basico</option>
                                  <option value="2">Medio</option>
                                  <option value="3">Avanzado</option>
                                </select>
                              </div>
                              <div className="input-group mb-1  p-3 input-line">
                                <span className="input-group-text" id="lessiones">Actividades deportivas relacionadas</span>
                                {['checkbox',].map((type) => (
                                  <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                      inline
                                      variant="dark"
                                      label="Futbol"
                                      className='mt-3'
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      inline
                                      variant="dark"
                                      label="Basket"
                                      className='mt-3'
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                      inline
                                      variant="dark"
                                      label="Ciclismo"
                                      className='mt-3'
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                      inline
                                      label="Zumba"
                                      variant="dark"
                                      className='mt-3'
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                      inline
                                      variant="dark"
                                      label="Correr"
                                      className='mt-3'
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />

                                  </div>



                                ))}
                              </div>
                              <div className='col-md-12 col-lg-12 col-sm-12'>
                                <div className="input-group mb-3  p-1 input-line">
                                  <span className="input-group-text" id="metas">Enfoque del plan?</span>
                                  {['checkbox',].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                      <Form.Check
                                        inline
                                        variant="dark"
                                        label="Ganar peso"
                                        className='mt-3'
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                      />
                                      <Form.Check
                                        inline
                                        variant="dark"
                                        label="Mejorar resistencia"
                                        className='mt-3'
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                      />
                                      <Form.Check
                                        inline
                                        variant="dark"
                                        label="Construir musculo"
                                        className='mt-3'
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                      />
                                      <Form.Check
                                        inline
                                        label="Perder peso"
                                        variant="dark"
                                        className='mt-3'
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                      />
                                      <Form.Check
                                        inline
                                        variant="dark"
                                        label="Aumentar Frexibilidad"
                                        className='mt-3'
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}


                                      />


                                      <Form.Check
                                        inline
                                        variant="dark"
                                        label="Aumentar Fuerza"
                                        className='mt-3'
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}


                                      />

                                      <Form.Check
                                        inline
                                        variant="dark"
                                        label="Mejorar Flexibilidad"
                                        className='mt-3'
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}


                                      />


                                    </div>



                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>


                      </Tabs>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdicionServiciosProductos;
