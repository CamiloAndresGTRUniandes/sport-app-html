import React from "react";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";
import ServicesTable from '../elements/ServicesTable';

const ServiciosProductos = () => {
  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage="Productos y Servicios" parentTitle="Socios" />
        <div
          className=""
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">

            <div className="row col-12 ">
              <div className="col-lg-2 col-sm-1">
                <button className='btn btn-secondary shadow-secondary btn-skew  mt-2'>
                  <span>
                    <i className="fa-solid fa-plus mt-2"></i>
                    &nbsp;
                    Nuevo
                  </span>
                </button>
              </div>
              <div className="col-lg-5 col-sm-1">
              </div>
              <div className="col-lg-5 col-sm-11 mb-3">
                <div className="input-line input-group">
                  <input type="text" className="form-control" placeholder="Buscar..." aria-label="Username" aria-describedby="nombre" />
                  <span>
                    <i className="fa-solid fa-magnifying-glass mt-2"></i>
                  </span>
                </div>
              </div>
             
            </div>
            <div className="row">
              <div className="schedule-table table-responsive">
                <ServicesTable></ServicesTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiciosProductos;
