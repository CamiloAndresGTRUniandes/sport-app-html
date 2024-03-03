import React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Nav} from 'react-bootstrap';
import { IMAGES } from '../constants/theme';

const FitnessGoal = ({isOpenModal}) => {
    return (
        <>
            <div className="col-lg-6 about-content m-b30">
                <div className="section-head m-0">
                    <span className="sub-title">Acerca de nosotros</span>
                    <h2 className="title">Ayudanos a conseguir el objetivo <span>Fitness</span> </h2>
                    <p className="m-0">
                        
                    Somos sport app y deseamos trabajar contigo para obtener los resultados que deseas. Si tu objetivo es perder peso, nutrici&oacute;n 
                    Estamos para servirte  con nuestros eventos  y activadades para ti :)
</p>
                </div>
                <div className="" data-wow-delay="0.8s">
                    <Tab.Container defaultActiveKey={'Mission'}>
                        <Nav as="ul" className="nav nav-tabs style-1 m-b20 m-t30">
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link" eventKey={'Mission'}>
                                    <span>Nuestra misi&oacute;n</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link" eventKey={'Vision'}>
                                    <span>Nuestra  Visi&oacute;n</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content m-sm-b30 m-b40 p-r30" id="myTabContent">
                            <Tab.Pane eventKey={'Mission'}>
                                <div className="content">
                                    <p>Ser la compañía líder en Latinoamérica que inspira y acompaña a las personas a alcanzar sus sueños de bienestar a través del ejercicio y la vida saludable. </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey={'Vision'}>
                                <div className="content">
                                    <p>Ser la primera plataforma de asesoria en latinoamerica, que permite a nuestros usuarios obtener sus metas fisicas asesorados por nuestros asociados y expertos
                                    Ser la plataforma líder en Latinoamérica que transforma vidas a través de asesorías personalizadas en fitness y bienestar, conectando a usuarios con expertos apasionados por su salud.
                                    </p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
                <div className="contact-us">
                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                    <div className="content">
                        <span>Llámanos para ayudarte</span>
                        <h4 className="number">+57 311 69 96 12 31</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 m-b30">
                <div className="dz-media">
                    <div className="image-box">
                        <div className="video-bx1 h-auto w-auto overflow-visible">
                            <img src={IMAGES.aboutExcercise1} alt="" />
                            <div className="video-btn sm">
                                
                                <Link to={"https://www.youtube.com/watch?v=ZMO_XC9w7Lw"} className="popup-youtube" 
                                    onClick={()=> isOpenModal(true)} 
                                    target='_blank' rel="noopener noreferrer"
                                    >
                                    <i className="fa fa-play"/>
                                </Link> 
                            </div>
                        </div>
                        <div className="info-box">
                            <span><i className="flaticon-play text-primary"></i> High Quality Video</span>							
                        </div>
                    </div>
                    <div className="image-box">
                        <img src={IMAGES.boxpic2} alt="" />
                        <div className="info-box">
                            <span><i className="flaticon-athletics text-primary"></i> Entranador Profesional</span>
                        </div>
                    </div>
                </div>
            </div>
                    
        </>
    );
};

export default FitnessGoal;