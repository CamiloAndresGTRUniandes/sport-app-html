import React from "react";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";
import { Link } from "react-router-dom";

const Recomendacion = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Recomendacion para Yonathan" parentTitle="Servicios" />
        <div className="container animate__animated animate__fadeInRightBig" style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}>
          <div className="">
            
            <div className="row">
              <div className="col-md-12">
                <div className="schedule-table table-responsive">
                  <div className="row col-12 ">
                    <div className="col-lg-9 col-sm-1">
                    </div>
                    <div className="col-lg-3 col-sm-11 mb-3">
                      <div className="input-line input-group">
                        <Link 
                        className="btn btn-dark shadow-dark btn-skew" 
                         to="/edicion-recomendacion" 
                        >
                          Crear Recomendación
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-table table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>

                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr >

                    <td > Yonathan</td>
                        <td>Zumba</td>
                        <td>Premium</td>
                      </tr>
                      
                      
                    </tbody>
                  </table>
                  </div>
                  <div className="schedule-table table-responsive">
                  <table className="table table-bordered table-striped mt-4">
                    <thead>
                      <tr>

                        <th>Recomendacion</th>
                        <th>Fecha de recomendacion</th>
                        <th>Detalle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>Tienes que mejorar tus rutinas de Zumba</td>
                        <td>09-03-2024</td>
                        <td>No estás concentrado en tus rutinas</td>
                      </tr>
                      <tr>

                        <td>Tienes que mejorar tus rutinas de Zumba</td>
                        <td>12-01-2024</td>
                        <td>No estás concentrado en tus rutinas</td>
                      </tr>
                      <tr>

                        <td>Tienes que mejorar tus rutinas de Zumba</td>
                        <td>12-12-2023</td>
                        <td>Se recomienda que uses ropa comoda</td>
                      </tr>
                      {/* Agrega más filas según sea necesario */}
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recomendacion;
