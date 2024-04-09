import React from "react";
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { IMAGES } from "../../../constants/theme";
import PageTitle from "../../../elements/PageTitle";
import PerfilGeografico from "./PerfilGeografico";
import PerfilAlimenticio from "./PerfilAlimenticio";
import PerfilDeportivo from "./PerfilDeportivo";
import ProductoServicio from "./ProductoServicio";


const EdicionServiciosProductos = () => {
  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage="Edicion Zumba Tatan" parentTitle="Socios" />
        <div
          className=""
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row col-12 ">
            <div className="container">
                        
                                    
                             
           
          </div>

              <Card className='animate__animated animate__fadeInRightBig' >
                <Card.Body>
                  <Card.Title>Edici&oacute;n producto o servicio</Card.Title>
                  

                  <div className="row">
                    <ProductoServicio/>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                      <Tabs
                        defaultActiveKey="0"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="0" title="Perfil Geografico Servicio">
                        <PerfilGeografico/>
                            
                        </Tab>
                        <Tab eventKey="1" title="Perfil alimenticio-Alimento">
                          <PerfilAlimenticio/>
                        </Tab>
                        <Tab eventKey="2" title="Perfil deportivo Servicio">
                            <PerfilDeportivo/>

                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdicionServiciosProductos;
