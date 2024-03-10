import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import PageTitle from '../elements/PageTitle';

const  wrapperBlog = [
    {title:"Nutricion", image:IMAGES.boxlog1},
    {title:"Planes personalizados ", image:IMAGES.boxlog2},
    {title:"Elementos deportivos", image:IMAGES.boxlog3},
    {title:"Motivacion y salud", image:IMAGES.boxlog4},
    {title:"Corazon saludable", image:IMAGES.boxlog5},
    {title:"Planes alimentarios", image:IMAGES.boxlog6},
    {title:"Ejercicios ", image:IMAGES.boxlog7},
    {title:"Planes deportivos", image:IMAGES.sports},
    

];

const Services = () => {
    const [hover, setHover] = useState(0);
    return (
        <>
            <div className="page-content bg-white animate__animated animate__fadeInRightBig">
                <PageTitle activePage="Servicios" parentTitle="Servicios" />
                <section className="" style={{backgroundImage: "url("+ IMAGES.BgImage1 +")"}}>
                    <div className="container">
                        <div className="row">
                            {wrapperBlog.map((item, index)=>(
                                <div className="col-xl-3 col-md-6 m-b30" key={index}>
                                    <div class={`icon-bx-wraper style-1 box-hover ${hover === index ? 'active' : ''}`}
                                        onMouseEnter={()=>setHover(index)}
                                    >
                                        <div className="icon-bx m-b30"> 
                                            <span className="icon-cell">
                                                <img src={item.image} alt="" />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title m-b10"><Link to={"#"}>{item.title}</Link></h5>
                                            
                                            <Link to={"/services-details-table"} className="btn btn-primary shadow-primary btn-skew"><span>Leer mas</span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>    
                    </div>
                </section>
   
          
            </div>   
        </>
    );
};

export default Services;