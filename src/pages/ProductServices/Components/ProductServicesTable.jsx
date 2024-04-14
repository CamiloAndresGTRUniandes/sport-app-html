import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import { useProductServiceList } from '../Hooks/useProductServiceList';
import { Link, useNavigate } from "react-router-dom";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";

const ServicesTable = () => {
  const {
    initialData,
    GetDataAsync,
    productsLoading
  } = useProductServiceList();
  const navigation = useNavigate();

  useEffect(() => {
    GetDataAsync();
  }, []);
  return (
    <>
      {!productsLoading && (
        <Table data-testid="product-services-table" className="table-responsive-md ck-table mb-5">
          <thead>

            <tr>
              <th>Nombre</th>
              <th>Producto/Servicio</th>
              <th>Tipo de Plan</th>
              <th>Costo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(initialData) && initialData.map((item, index) => (
              <tr className="row_1" key={index}>
                <td className='highlighted-cell'>{item.name}</td>
                <td>{item.serviceType}</td>
                <td>{item.plan}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/edit-product-services/${item.productId}`} className="btn btn-primary shadow-primary btn-skew  mt-2"><span>
                    <i className="fa-solid fa-pencil"></i>
                  </span></Link>
                </td>
                <td>
                  <button className='btn btn-dark shadow-danger btn-skew  mt-2'>
                    <i className="fa-solid fa-close"></i>
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr className="row_1">
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
          </tr> */}
          </tbody>
        </Table>)}
      {productsLoading && <SpinnerSportApp />}
    </>
  )
};
export default ServicesTable;