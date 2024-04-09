import React from 'react';
import { Tab, Form } from 'react-bootstrap';

const PerfilAlimenticio = () => {
  return (
  
          <div className='row animate__animated animate__fadeInUpBig'>
            <div className="input-group mb-3 ml-5 p-1 input-line">
              <span className="input-group-text ml-5" id="cualesAlergias">Restricciones para alergias?</span>
              {['checkbox',].map((type, index) => (
                <div key={`inline-${type}-${index}`} className="mb-3">
                  <Form.Check
                    inline
                    variant="dark"
                    label="Lacteos"
                    className='mt-3'
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    variant="dark"
                    label="Gluten"
                    className='mt-3'
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    variant="dark"
                    label="Frutos Secos"
                    className='mt-3'
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </div>
            <div className="input-group mb-3  input-line">
              <span className="input-group-text" id="tipoDeDieta">Alimento orientado a ?</span>
              <select className="form-control" aria-label="tipoDeDieta">
                <option value="1">Vegetariano</option>
                <option value="2">Vegano</option>
                <option value="3">Carnívoro</option>
                <option value="4">Omnívoro</option>
                <option value="5">Frutívoro</option>
              </select>
            </div>
          </div>

  );
};

export default PerfilAlimenticio;
