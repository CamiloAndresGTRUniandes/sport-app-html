import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useProducts } from "../Hooks/useProducts";


export const ServiciosProductosTable = () => {


  const showSwal = () => {
    withReactContent(Swal).fire({
      title: 'Super lo hiciste quedaste inscrito :)!',
      text: "Recuerda, este  evento es  pago",
      icon: "success",
      timer: 25000
       
    })
  }


  const {products} = useProducts();

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
          {products.map(product => (
            <tr className="row_1" key={product.id}>
              <td className="event-time"> {product.usuario}</td>
              <td className="event" >{product.servicio}</td>

              <td>{product.description}</td>
              <td className="event">
                <span to={"#"} className="title">{product.plan}</span>
              </td>
              <td>{product.valor}</td>
              <td>
                {product.plan === 'Plan Basico' ? (
                  <button onClick={showSwal} className='btn btn-dark shadow-dark btn-skew  mt-2'>Suscribete</button>
                ): 
                (
                  <button onClick={showSwal} className='btn btn-primary shadow-primary btn-skew  mt-2'>Suscribete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
};
export default ServiciosProductosTable;