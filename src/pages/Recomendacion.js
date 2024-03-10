import React from "react";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";

const Recomendacion = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Recomendaciones" parentTitle="Servicios" />
        <div className="content-inner" style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="schedule-table table-responsive">
   

            <div className="row col-12 ">

              <div className="col-lg-9 col-sm-1">
              </div>
              <div className="col-lg-3 col-sm-11 mb-3">
                <div className="input-line input-group">
                <button className="btn btn-dark " onClick={() => console.log("Crear Recomendación")}>
                    Crear Recomendación
                  </button>
                </div>
              </div>
            </div>



                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <td>Yonathan</td>
                        <td>Zumba</td>
                        <td>Premium</td>
                      </tr>
                      {/* Agrega más filas según sea necesario */}
                    </tbody>
                  </table>
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
    </>
  );
};

export default Recomendacion;
