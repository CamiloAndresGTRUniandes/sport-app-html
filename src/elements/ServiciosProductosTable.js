import React from 'react';



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const ServiciosProductosTable = () => {


  const showSwal = () => {
      withReactContent(Swal).fire({
        title: 'Super lo hiciste quedaste inscrito :)!',
        text: "Recuerda, este  evento es  pago",
        icon: "success",
        timer: 5000
       
      })
    }

  return (
    <>
      <table className="table-responsive-md ck-table">
        <thead>
          <tr>
            <th></th>
            <th>Servicio</th>
            <th>Descripcion</th>
            <th>Plan</th>
            <th>Valor</th>
            <th>Suscribete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row_1">
            <td className="event-time"> Maria mendel </td>
            <td className="event" >
              Jooging

            </td>

            <td>

              Corre como si de este dependiera tu vida..
            </td>
            <td className="event">
              <span to={"#"} className="title">Plan Basico</span>
            </td>
            <td> $ 80.000  Mes</td>
            <td>
              <button onClick={showSwal} className='btn btn-dark shadow-dark btn-skew  mt-2'>Suscribete</button>
            </td>

          </tr>
          <tr className="row_2">
            <td className="event-time"> Dr Camilo de Keneddy </td>
            <td className="event" >
              Crossfit  en Keneddy

            </td>

            <td>

              Crossfit es una disciplina fitness creada  ...
            </td>
            <td className="event">
              <span to={"#"} className="title">Plan Premium</span>
            </td>
            <td> $ 150.000  Mes</td>
            <td>
              <button onClick={showSwal} className='btn btn-primary shadow-primary btn-skew  mt-2'>Suscribete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
};
export default ServiciosProductosTable;