import React, { useState } from 'react';
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";
import { Link } from 'react-router-dom';

const AdministrarSeguimiento = () => {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de ejemplo (puedes reemplazarlos con tu lógica de obtención de datos)
  const data = [
    { nombre: 'Yonathan', producto: 'Zumba', valor: '$ 150000', categoria: 'Ejercicios', tipoPlan: 'Plan Premium', contrato: 'Al dia', recomendacion: 'Recomendacion' },
    { nombre: 'Daniel', producto: 'Creatina', valor: '$ 10000', categoria: 'Ejercicios', tipoPlan: 'Free', contrato: 'Pendiente', recomendacion: 'Recomendacion' },
    { nombre: 'Elisa', producto: 'Ciclas', valor: '$ 505000', categoria: 'Ejercicios', tipoPlan: 'Free', contrato: 'Al dia', recomendacion: 'Recomendacion' },
    { nombre: 'Camilo', producto: 'Nutricionistas', valor: '$ 70000', categoria: 'Salud', tipoPlan: 'Premium', contrato: 'Pendiente', recomendacion: 'Recomendacion' },
    // Otros datos...
  ];

  // Filtrar datos basados en el término de búsqueda
  const filteredData = data.filter(item =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Administrar Seguimiento" parentTitle="AdministrarSeguimiento" />
        <div 
         className="animate__animated animate__fadeInRightBig"
        style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}>

          <div className="container ">
            <div className="section-head ">
              <h2 className="title wow fadeInUp">
                Dulce  Gatita 
              </h2>
            </div>

            <div className="row col-12 ">

                
              <div className="col-lg-3 col-sm-1">
              <Link to="/Recomendacion" >
                              <button className='btn btn-dark shadow-dark btn-skew  mt-2'>
                              <i className="fa-solid fa-plus mt-2"></i>   
                              &nbsp;  Recomendaci&oacute;n  
                            </button>
                            </Link>
              </div>
              <div className='col-lg-6 col-sm-1' >

              </div>
              <div className="col-lg-3 col-sm-11 mb-3">
                <div className="input-line input-group">
                  <input
                    type="text"
                    placeholder="Buscar por usuario"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control "
                    style={{ marginRight: '15px' }} // Añadido espacio entre el input y el borde derecho
                    />
                  <span>
                    <i className="fa-solid fa-magnifying-glass mt-2"></i>
                  </span>
                </div>
              </div>
            </div>
     
            <div className="col-md-12">
              <div className="schedule-table table-responsive">
                {/* Tabla de datos */}
                <table className="table-responsive-md ck-table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Producto</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Tipo de plan</th>
                      <th>Contrato</th>
                      <th>Recomendacion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={index}>
                        <td className="event-time">{item.nombre}</td>
                        <td>{item.producto}</td>
                        <td>{item.valor}</td>
                        <td>{item.categoria}</td>
                        <td>{item.tipoPlan}</td>
                        <td>{
                              item.contrato=="Al dia"?
                              (<Link 
                              to="/seguimiento-contrato"
                              className='col-10 btn btn-warning shadow-dark btn-skew  mt-2'
                              >{item.contrato}</Link>)
                              :
                              (<Link 
                                to="/seguimiento-contrato"
                                className='col-10 btn btn-danger shadow-danger btn-skew  mt-2'
                                >{item.contrato}</Link>)

                          }
                        
                        </td>
                        <td>
                            <Link to="/Recomendacion" >
                            <button className='btn btn-dark shadow-dark btn-skew  mt-2'>{item.recomendacion}
                            </button>
                            </Link>
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdministrarSeguimiento;
