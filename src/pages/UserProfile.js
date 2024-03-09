import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'animate.css';

const UserProfile = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle parentTitle="Pages" activePage="Perfil de usuario" />
        <div className="container">
          <Card className='animate__animated animate__fadeInRightBig' >
            <Card.Body>
              <Card.Title>Registro de perfil de usuario</Card.Title>
              <Card.Text className='mt-5'>
                Registra tu perfil para prestarte la mejor asesoria
              </Card.Text>
              <div className="row ">
                <div className='col-md-6 col-lg-6 col-sm-12 mr-3'>

                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="nombre">Nombre</span>
                    <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="nombre" />
                  </div>

                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="apellidos">Apellidos</span>
                    <input type="text" className="form-control" placeholder="" aria-label="apellidos" aria-describedby="apellidos" />
                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="email">Email</span>
                    <input type="text" className="form-control" placeholder="" aria-label="email" aria-describedby="email" />
                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="telefono">Telefono</span>
                    <input type="text" className="form-control" placeholder="" aria-label="telefono" aria-describedby="telefono" />
                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="fechanacimiento">Fecha de nacimiento</span>
                    <input type="date" className="form-control" placeholder="" aria-label="fechanacimiento" aria-describedby="fechanacimiento" />
                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="genero">Genero</span>
                    <select class="form-control" aria-label="genero">
                      <option value="1">Masculino</option>
                      <option value="2">Femenino</option>
                    </select>
                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="edad">Edad</span>
                    <input type="number" className="form-control" placeholder="" aria-label="edad" aria-describedby="edad" />
                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="peso">Peso</span>
                    <input type="number" className="form-control" placeholder="" aria-label="peso" aria-describedby="peso" />
                  </div>
                  <div className="row d-flex justify-content-around" >
                    <button
                      name="submit"
                      type="button"
                      value="Submit"
                      className="col-4  btn btn-primary btn-lg btn-skew"
                    >
                      <span>Guardar</span>
                    </button>
                    <button
                      name="submit"
                      type="button"
                      className="col-4  btn btn-secondary btn-lg btn-skew"
                    >
                      <span>Cancelar</span>
                    </button>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                  <Tabs
                    defaultActiveKey="0"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="0" title="Perfil Geografico">
                      <div className='row  animate__animated animate__fadeInUpBig'>
                        <div className='col-md-12 col-lg-12 col-sm-12'>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="pais">Pais</span>
                            <select class="form-control" aria-label="pais">
                              <option value="1">Colombia</option>
                              <option value="2">Ecuador</option>
                            </select>
                          </div>

                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="Estado">Estado</span>
                            <select class="form-control" aria-label="Estado">
                              <option value="1">Antioquia</option>
                              <option value="2">Bogota</option>
                            </select>
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="Ciudad">Ciudad</span>
                            <select class="form-control" aria-label="Ciudad">
                              <option value="1">Medellin</option>
                              <option value="2">Bello</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="1" title="Perfil alimenticio">
                      <div className='row animate__animated animate__fadeInUpBig'>
                        <div className='col-md-12 col-lg-12 col-sm-12'>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="verdurasSemana">Cuantas veces consumes verduras a la semana?</span>
                            <input type="number" className="form-control" placeholder="" aria-label="verdurasSemana" aria-describedby="verdurasSemana" />
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="comidaRapidaSemana">Cuantas veces consumes comida rapida?</span>
                            <input type="number" className="form-control" placeholder="" aria-label="comidaRapidaSemana" aria-describedby="comidaRapidaSemana" />
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="vasosAguaDia">Cuantas vasos de agua consumes al dia?</span>
                            <input type="number" className="form-control" placeholder="" aria-label="vasosAguaDia" aria-describedby="vasosAguaDia" />
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="caloriasDias">Sabes cuantas calorias consumes al dia</span>
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="2" title="Perfil deportivo">
                      <div className='row  animate__animated animate__fadeInUpBig'>
                      
                        <div className='col-md-12 col-lg-12 col-sm-12'>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="ejercicioSemana">Cuantas veces haces ejercicio por semana?</span>
                            <input type="number" className="form-control" placeholder="" aria-label="ejercicioSemana" aria-describedby="ejercicioSemana" />
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="tienesLesiones">Tienes lesiones</span>
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                              className='mt-2 secondary'
                              aria-label="tienesLesiones" aria-describedby="tienesLesiones"
                            />
                          </div>
                          <div className="input-group mb-3  input-line">
                            <span className="input-group-text" id="lessiones">Que lessiones tienes?</span>
                            <textarea type="Area" className="form-control" placeholder="" aria-label="lessiones" aria-describedby="lessiones" />
                          </div>
                          <div className="input-group mb-3  p-3 input-line">
                            <span className="input-group-text" id="lessiones">Actividades deportivas favoritas</span>
                            {['checkbox',].map((type) => (
                              <div key={`inline-${type}`} className="mb-3">
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
                                  id={`inline-${type}-2`}
                                />
                                <Form.Check
                                  inline
                                  label="Zumba"
                                  variant="dark"
                                  className='mt-3'
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-2`}
                                />
                                <Form.Check
                                  inline
                                  variant="dark"
                                  label="Correr"
                                  className='mt-3'
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-2`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <section className="call-action style-1 footer-action">
          <div className="container">
            <NewsLetter />
          </div>
        </section>
      </div>
    </>
  );
};

export default UserProfile;
