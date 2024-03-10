import React from "react";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Pagar = () => {
  const irPasarela = (e) => {
    e.preventDefault();
    alert("ir a pasarela")
  }

  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage="Pagar Creatinina" parentTitle="Tus compras" />
        <div
          className=""
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row col-12 ">
              <Card className='animate__animated animate__fadeInRightBig' >
                <Card.Body>
                  <Card.Title>Seleccion tu proveedor de producto</Card.Title>
                  <div className="Row">
                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="nombre">Nombre</span>
                      <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="nombre" value="Creatina" />
                    </div>

                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="categoria">Banco</span>
                      <select className="form-control" aria-label="categoria">
                        <option value="1">Bancolombia</option>
                        <option value="2">Davivienda</option>
                        <option value="3">BVVA</option>
                        <option value="3">Banco de Bogota</option>
                      </select>
                    </div>
                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="valor" >Valor</span>
                      <input type="text" className="form-control" placeholder="" aria-label="valor" aria-describedby="valor" value="$150.000" />
                    </div>


                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="email" >Email</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="email"
                        aria-describedby="email"
                        value="elisamendel@gmail.com"
                      />
                    </div>

                    <div className="input-group mb-3  input-line">
                      <span className="input-group-text" id="email" >Pasarela de pago</span>
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                        <label className="btn btn-outline-primary ml-2" for="btnradio1">PSE</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label className="btn btn-outline-secondary" for="btnradio2">Mis pagos</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label className="btn btn-outline-info" for="btnradio3">Tu pagos</label>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-around" >
                    <Link onClick={irPasarela}

                      className="col-2  btn btn-primary shadow-primary btn-skew  mt-2">

                      Ir a pagos
                    </Link>

                    <Link to={"/carrito-compras"}
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

export default Pagar;
