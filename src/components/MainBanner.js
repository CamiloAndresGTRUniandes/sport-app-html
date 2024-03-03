import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';


const logoBlog = [
    {logo: IMAGES.logo1},
    {logo: IMAGES.logo2},
    {logo: IMAGES.logo3}
];

const iconDropBlog = [
    {title : "SPORTAPP", id:'icon1'},
    {title : "PLANEACION DE EJERCICIOS", id:'icon2'},
    {title : "PLANES ALIMENTARIOS", id:'icon3'},
];

const MainBanner = ({isOpenModal}) => {
    const [iconTitle,setIconTitle] = useState();
    // const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-inner" style={{backgroundImage: "url("+ IMAGES.SliderBg1 +")"}}>
                <h2 className="data-text">
                    <span>S</span>
                    <span>P</span>
                    <span>O</span>
                    <span>R</span>
                    <span>T</span>
                    <span>A</span>
                    <span>P</span>
                    <span>P</span>
                </h2>
                <div className="container">
                    <div className="row banner-row">
                        <div className="col-lg-6 col-md-7 col-sm-8">
                            <div className="banner-content">
                                <div className="top-content">
                                    <h1 className="title" >Alcanza tus metas y transformate con <span className="text-primary">SPORTAPP</span></h1>
                                    <p >"Deja que SPORTAPP marque el ritmo de tu transformación física. ¡Tu mejor versión comienza aquí!"</p>
                                    <div className="d-flex align-items-center">
                                        <Link to={"/about-us"} className="btn btn-skew btn-lg btn-primary shadow-primary"><span>Comenzar</span></Link>
                                        <div className="video-bx4">
                                            <Link target="_blank" to={"https://www.youtube.com/watch?v=EgH9npSDgLA"} className="video-btn style-1 popup-youtube" 
                                                onClick={()=> isOpenModal(true)} >
                                                <i className="fa fa-play"/>{" "}
                                                <span className="text">Reproducir vídeo</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-4">
                            <div className="banner-media media1 anm wow fadeInRight" data-wow-delay="1s" data-speed-x="-2" data-speed-scale="-1">
                                <img src={IMAGES.sliderpic1} className="main-img" alt="" />
                                <ul className="point-list">
                                    {iconDropBlog.map((item, ind)=>(
                                        <li 
                                            className={`icon-dropdown anm ${item.id === iconTitle ? 'show' : ''}`} 
                                            data-speed-x="-1" data-speed-scale="-1"
                                            onClick={()=>{
                                                setIconTitle(item.id)
                                                if(item.id===iconTitle){
                                                    setIconTitle('')
                                                }                                                        
                                            }}
                                            key={ind}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                            <span>{item.title}</span>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default MainBanner;