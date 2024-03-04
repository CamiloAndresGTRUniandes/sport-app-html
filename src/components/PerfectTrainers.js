import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES, SVGICON } from '../constants/theme';

const iconBox = [
    {image: IMAGES.aboutlogo1, title:"Ejecicios"},
    {image: IMAGES.aboutlogo2, title:"Salud y bienestar"},
    {image: IMAGES.aboutlogo3, title:"Nutricion"},
    {image: IMAGES.aboutlogo4, title:"Planes alimenticios"}
];

const PerfectTrainers = () => {
    return (
        <>
            <div className="col-lg-6 m-b30">
                <div className="dz-media ">
                    <img src={IMAGES.aboutgirl} alt="" className="wow fadeInUp" data-wow-delay="0.6s" />
                    {SVGICON.multilines}
                    <ul>
                        <li><span>SPORTAPP</span></li>
                        <li><span>EJERCICIOS</span></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 m-b30 about-content">
                <div className="section-head">
                    <span className="sub-title wow fadeInUp" data-wow-delay="0.2s">Consigue tu entrenamiento perfecto</span>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.4s">Mejores  <span>Entrenamientos</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">"SPORTAPP: Donde cada movimiento es un paso hacia la grandeza. Eleva tu rendimiento, conquista tus metas, ¡vive la intensidad del éxito deportivo!"</p>
                </div>
                <div className="row m-t40 m-sm-b20 m-b30">
                    {iconBox.map((item, ind)=>(
                        <div className="col-sm-6 m-sm-b20 m-b30" key={ind}>
                            <div className="icon-bx-wraper style-2">
                                <div className="icon-bx"> 
                                    <span className="icon-cell">
                                        <img src={item.image} alt="" />
                                    </span>
                                </div>
                                <div className="icon-content">
                                    <h5 className="dz-title">{item.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="clearfix wow fadeInUp" data-wow-delay="1.0s">
                    <Link to={"/about-us"} className="btn btn-skew btn-lg btn-primary shadow-primary"><span>Nosotros</span></Link>
                </div>
            </div>                    
        </>
    );

}
export default PerfectTrainers;