import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../constants/theme'



const serviceCards = [
    { icon: 'flaticon-exercise', title: 'Abdominales' },
    { icon: 'flaticon-exercise-2', title: 'Pecho' },
];
const serviceCards2 = [
    { icon: 'flaticon-man', title: 'Hombros' },
    { icon: 'flaticon-lifting', title: 'Brazos' },
    { icon: 'flaticon-athletics', title: 'Cuerpo completo' },
];
const OurServices = () => {
    return (
        <>

            <div className="col-xl-4 left-grid">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="section-head style-1">
                            <h5 className="sub-title">Nuestros servicios</h5>
                            <h2 className="title">Formacion<span> Virtual </span></h2>
                            <p className="p-r50">"Descubre las mejores rutinas de ejercicio en SportApp, tu guía definitiva hacia la forma física ideal."</p>
                        </div>
                    </div>
                    {serviceCards.map((item, ind) => (
                        <div className="col-xl-12 col-md-6 wow fadeInUp" key={ind}>
                            <div className="icon-bx-wraper style-4 bg-white m-b30">
                                <div className="icon-bx icon-bg-white m-b20 align-items-center">
                                    <div className="icon-cell text-primary rounded-circle m-r10">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="dz-title m-b10"><Link to="/pricing">{item.title}</Link></h4>
                                </div>
                                <div className="icon-content">
                                    <p className="m-b15">Entrenamientos</p>
                                    <Link to="/pricing" className="read-more">Leer mas <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 m-b30 order-md-1 order-2">
                <div className="trainer wow fadeInUp" data-wow-delay="0.8s">
                    <img src={IMAGES.aboutdani2} alt="" className="anm" data-speed-x="-2" data-speed-scale="-2" />
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 right-grid order-md-2 order-1">
                <div className="row">
                    {serviceCards2.map((item, index) => (
                        <div className="col-xl-12 col-lg-12 wow fadeInUp" key={index}>
                            <div className="icon-bx-wraper style-4 bg-white m-b30">
                                <div className="icon-bx icon-bg-white m-b20 align-items-center">
                                    <div className="icon-cell text-primary rounded-circle m-r10">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="dz-title m-b10"><Link to="/pricing">{item.title}</Link></h4>
                                </div>
                                <div className="icon-content">
                                    <p className="m-b15">Entrenamientos</p>
                                    <Link to="/pricing" className="read-more">Leer mas <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default OurServices