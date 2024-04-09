import React from 'react';
import { Tab, Form } from 'react-bootstrap';

const PerfilDeportivo = () => {
  return (

          <div className='row animate__animated animate__fadeInUpBig'>
            <div className='col-md-12 col-lg-12 col-sm-12'>
              <div className="input-group mb-3 input-line">
                <span className="input-group-text" id="nivelFisico">Nivel Fisico</span>
                <select className="form-control" aria-label="nivelFisico">
                  <option value="1">Basico</option>
                  <option value="2">Medio</option>
                  <option value="3">Avanzado</option>
                </select>
              </div>
              <div className="input-group mb-1 p-3 input-line">
                <span className="input-group-text" id="lessiones">Actividades deportivas relacionadas</span>
                {['checkbox',].map((type, index) => (
                  <div key={`inline-${type}-${index}`} className="mb-3">
                    <Form.Check
                      inline
                      variant="dark"
                      label="Futbol"
                      className='mt-3'
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      variant="dark"
                      label="Basket"
                      className='mt-3'
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      variant="dark"
                      label="Ciclismo"
                      className='mt-3'
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Zumba"
                      variant="dark"
                      className='mt-3'
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      variant="dark"
                      label="Correr"
                      className='mt-3'
                      name="group1"
                      type={type}
                      id={`inline-${type}-5`}
                    />
                    {/* Aquí puedes agregar más actividades si es necesario */}
                  </div>
                ))}
              </div>
              <div className='col-md-12 col-lg-12 col-sm-12'>
                <div className="input-group mb-3 p-1 input-line">
                  <span className="input-group-text" id="metas">Enfoque del plan?</span>
                  {['checkbox',].map((type, index) => (
                    <div key={`inline-${type}-${index}`} className="mb-3">
                      <Form.Check
                        inline
                        variant="dark"
                        label="Ganar peso"
                        className='mt-3'
                        name="group2"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        variant="dark"
                        label="Mejorar resistencia"
                        className='mt-3'
                        name="group2"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        variant="dark"
                        label="Construir musculo"
                        className='mt-3'
                        name="group2"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Perder peso"
                        variant="dark"
                        className='mt-3'
                        name="group2"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                      <Form.Check
                        inline
                        variant="dark"
                        label="Aumentar Frexibilidad"
                        className='mt-3'
                        name="group2"
                        type={type}
                        id={`inline-${type}-5`}
                      />
                      {/* Aquí puedes agregar más metas si es necesario */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

  );
};

export default PerfilDeportivo;
