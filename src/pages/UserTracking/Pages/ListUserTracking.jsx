import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../constants/theme";
import PageTitle from "../../../elements/PageTitle";
import { Link } from "react-router-dom";
import { useListUsersEnroll } from "../Hooks";
import { SpinnerSportApp } from "../../Utils";

const ListUserTracking = () => {
  const {
    listAllUsers,
    getListUsersEnroll,
    loadingUserList,
    nameAsociate,
  } = useListUsersEnroll();

  useEffect(() => {
    getListUsersEnroll();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = listAllUsers.filter((item) =>
    item.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="page-content bg-white">
        <PageTitle
          activePage="Administrar Seguimiento"
          parentTitle="AdministrarSeguimiento"
        />
        <div
          className="animate__animated animate__fadeInRightBig"
          style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}
        >
          <div className="container ">
            <div className="section-head ">
              <h2 className="title wow fadeInUp"> {nameAsociate} </h2>
            </div>

            <div className="row col-12 ">
              <div className="col-lg-3 col-sm-1"></div>
              <div className="col-lg-6 col-sm-1"></div>
              <div className="col-lg-3 col-sm-11 mb-3">
                <div className="input-line input-group">
                  <input
                    type="text"
                    placeholder="Buscar por usuario"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control "
                    style={{ marginRight: "15px" }} // Añadido espacio entre el input y el borde derecho
                  />
                  <span>
                    <i className="fa-solid fa-magnifying-glass mt-2"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="schedule-table table-responsive">
                {!loadingUserList && (
                  <table className="table-responsive-md ck-table">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Producto</th>
                        <th>Categoria</th>
                        <th>Tipo de plan</th>
                        <th>Contrato</th>
                        <th>Recomendacion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        
                        <tr key={item.id}>
                          <td className="event-time">{item.user.name} {item.user.lastName}</td>
                          <td>{item.serviceName}</td>
                          
                          <td>{item.categoryName}</td>
                          <td>{item.plan.name}</td>
                          <td>
                            {item.wasPayed == true? (
                              <Link
                                
                                className="col-10 btn btn-warning shadow-dark btn-skew  mt-2"
                              >
                                Al dia
                              </Link>
                            ) : (
                              <Link
                                className="col-10 btn btn-danger shadow-danger btn-skew  mt-2"
                              >
                                Pendiente
                              </Link>
                            )}
                          </td>
                          <td>
                            <Link to={"/recomendacion-user/"&& item.id}>
                              <button className="btn btn-dark shadow-dark btn-skew  mt-2">
                                Recomendaci&oacute;n
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {loadingUserList&&<SpinnerSportApp></SpinnerSportApp>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUserTracking;
