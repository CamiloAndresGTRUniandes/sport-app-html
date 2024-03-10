import React from 'react';
import { Link } from 'react-router-dom';

const CarritoComprasTable = () => {
  return (
    <>
      <table className="table-responsive-md ck-table">
        <thead>

          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Producto/Servicio</th>
            <th>Tipo de Plan</th>
            <th>Costo</th>
             <th>Accion</th>
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
                 Pagado  
            </td>
          

          </tr>
          <tr className="row_2">
            <td className="event-time"> Creatina </td>
            <td className="event" >Producto</td>
            <td>25.000 </td>
            <td className="event"><span to={"#"} className="title">Free</span></td>
            <td> $ 150.000  Mes</td>
            <td>
              <Link to={"/pagar"} className="btn btn-warning shadow-warning btn-skew  mt-2"><span>
              <i class="fa-solid fa-usd"></i>
              &nbsp;
                Por pagar
              </span></Link>
            </td>
          
          </tr>
        </tbody>
      </table>
    </>
  )
};
export default CarritoComprasTable;