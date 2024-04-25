import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import { useProductServiceList } from '../Hooks/useProductServiceList';
import { Link, useNavigate } from "react-router-dom";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";

const ServicesTable = () => {
  const {
    initialData,
    GetDataAsync,
    productsLoading,
    deleteProductService
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
            <td className='highlighted-cell event'>{item.name}</td>
            <td className='event'>{item.serviceType.name}</td>
            <td className='event'>{item.plan.name}</td>
            <td className='event'>{item.price}</td>
            <td>
              <Link to={`/edit-product-services/${item.productId}`} className="btn btn-primary shadow-primary btn-skew  mt-2"><span>
              <i className="fa-solid fa-pencil"></i>
                </span></Link>
            </td>
            <td>
              <button className='btn btn-dark shadow-danger btn-skew  mt-2' key={item.index} onClick={() => {deleteProductService(item.productId)}}>
              <i className="fa-solid fa-close"></i>
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>)}
      {productsLoading && <SpinnerSportApp />}
    </>
  )
};
export default ServicesTable;