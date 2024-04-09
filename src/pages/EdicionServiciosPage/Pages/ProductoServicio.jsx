import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import PerfilGeografico from './PerfilGeografico';
import PerfilDeportivo from './PerfilDeportivo';
import PerfilAlimenticio from './PerfilAlimenticio';
import Tabs from 'react-bootstrap/Tabs';
import { Tab } from 'react-bootstrap';

const ProductoServicio = () => {
  return (
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


  );
};

export default ProductoServicio;
