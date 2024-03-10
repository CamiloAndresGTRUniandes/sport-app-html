import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'animate.css';
import { Link } from 'react-router-dom';

const EdicionRecomendacion = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle parentTitle="Recomendacion" activePage="Recomendacion para yonathan" />
        <div className="container">
          <Card className='animate__animated animate__fadeInRightBig' >
            <Card.Body>
              <Card.Title>Registro de perfil de usuario</Card.Title>
              <Card.Text className='mt-5'>
                Registra tu recomendacion de <b>Yonathan</b>  para el servicio/producto  Zumba
              </Card.Text>
              <div className="row ">
                <div className='col-md-12 col-lg-12 col-sm-12 mr-3'>

                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="nombre">Imagen</span>
                    <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="nombre" value="imagen.png" />
                  </div>

                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="apellidos">Recomendaci&oacute;n</span>
                    <input type="text" className="form-control" placeholder="" aria-label="apellidos" aria-describedby="apellidos" value="por favor intenta calentar" />

                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="tiporecomendacion">Tipo de recomendaci&oacute;n</span>
                    <select class="form-control" aria-label="tiporecomendacion">
                      <option value="1">Alimentaria</option>
                      <option value="2">Deportiva</option>
                    </select>
                  </div>
                  <div className="input-group mb-3  input-line">
                    <span className="input-group-text" id="telefono">Detalle</span>
                    <input type="text" className="form-control" placeholder="" aria-label="telefono" aria-describedby="telefono" />
                  </div>
                  <div className="row d-flex justify-content-around" >
                    <Link
                      to="/recomendacion"
                      className="col-2  btn btn-primary btn-lg btn-skew"
                    >
                      <span>Guardar</span>
                    </Link>
                    <Link
                      to="/recomendacion"
                      className="col-2  btn btn-secondary btn-lg btn-skew"
                    >
                      Cancelar
                    </Link>
                  </div>
                </div>
  
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default EdicionRecomendacion;
