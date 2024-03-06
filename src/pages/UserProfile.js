import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const UserProfile = () => {

  return (
    <>
      <div className="page-content bg-white">
        <PageTitle parentTitle="Pages" activePage="Perfil de usuario" />

        <div className="container">
          <Card >
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
                    <span className="input-group-text" id="basic-addon1">Telefono</span>
                    <input type="text" className="form-control" placeholder="" aria-label="telefono" aria-describedby="basic-addon1" />
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
                      value="Submit"
                      className="col-4  btn btn-secondary btn-lg btn-skew"
                    >
                      <span>Cancelar</span>
                    </button>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>

                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="1" title="Perfil alimenticio">
                      Tab content for Home
                    </Tab>
                    <Tab eventKey="2" title="Perfil deportivo">
                      Tab content for Profile
                    </Tab>
                    <Tab eventKey="3" title="Contact">
                          Mi info
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
