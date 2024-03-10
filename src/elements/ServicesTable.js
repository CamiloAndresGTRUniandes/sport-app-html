import React from 'react';
import { Link } from 'react-router-dom';

const ServicesTable = () => {
  return (
    <>

      <table className="table-responsive-md ck-table">
        <thead>

          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Producto/Servicio</th>
            <th>Cargar</th>
            <th>Tipo de Plan</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row_1">
            <td className="event-time"> Zumba </td>
            <td className="event" >Servicio</td>
            <td>$ 150.000 </td>
            <td className="event">
              <span to={"#"} className="title">Plan Basico</span>
            </td>
            <td> $ 80.000  Mes</td>
            <td>
            <Link to={"/edicion-servicios-productos"} className="btn btn-primary shadow-primary btn-skew  mt-2"><span>
                 <i className="fa-solid fa-pencil"></i>
              </span></Link>
            </td>
            <td>
              <button className='btn btn-dark shadow-danger btn-skew  mt-2'>
              <i className="fa-solid fa-close"></i>
              </button>
            </td>

          </tr>
          <tr className="row_2">
            <td className="event-time"> Creatina </td>
            <td className="event" >Producto</td>
            <td>25.000 </td>
            <td className="event"><span to={"#"} className="title">Free</span></td>
            <td> $ 150.000  Mes</td>
            <td>
              <Link to={"/edicion-servicios-productos"} className="btn btn-primary shadow-primary btn-skew  mt-2"><span>
              <i className="fa-solid fa-pencil"></i>
                </span></Link>
            </td>
            <td>
              <button className='btn btn-dark shadow-danger btn-skew  mt-2'>
              <i className="fa-solid fa-close"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
};
export default ServicesTable;