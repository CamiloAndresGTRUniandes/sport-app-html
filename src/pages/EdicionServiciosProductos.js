import React from "react";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const EdicionServiciosProductos = () => {
  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage="Edicion Zumba" parentTitle="Socios" />
        <div
          className=""
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row col-12 ">
              <Card className='animate__animated animate__fadeInRightBig' >
                <Card.Body>
                  <Card.Title>Edici&oacute;n producto o servicio</Card.Title>
                  <div className="Row">
                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="nombre">Nombre</span>
                      <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="nombre" value="Zumba" />
                    </div>

                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="categoria">Categoria</span>
                      <select class="form-control" aria-label="categoria">
                        <option value="1">Servicio</option>
                        <option value="2">Producto</option>
                      </select>
                    </div>
                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="valor" >Valor</span>
                      <input type="text" className="form-control" placeholder="" aria-label="valor" aria-describedby="valor" value="$150.000" />
                    </div>

                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="tipoPlan">Tipo de plan</span>
                      <select class="form-control" aria-label="tipoPlan">
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
                        value="image.png"
                      />
                    </div>

                  </div>
                  <div className="row d-flex justify-content-around" >
                    <Link to={"/productos-servicios"}
                      className="col-2  btn btn-primary shadow-primary btn-skew  mt-2">
                      Guardar
                    </Link>

                    <Link to={"/productos-servicios"}
                      className="col-2  btn btn-dark shadow-primary btn-skew  mt-2">
                      Cancelar
                    </Link>


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
