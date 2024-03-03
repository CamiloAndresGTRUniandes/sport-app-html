import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import NewsLetter from '../elements/NewsLetter';
import PageTitle from '../elements/PageTitle';

const pricingBlog = [
    {rate: '49', title: 'Basico', prime: 'premium'},
    {rate: '59', title: 'Ultra'},
    {rate: '69', title: 'Pro'},
];

const Pricing = () => {
    const [hoverEffect, setHoverEffect] = useState(1);
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage={'Precios'} parentTitle="Pages" />
                <section className="content-inner rounded-shape-top overflow-hidden" style={{backgroundImage: "url("+ IMAGES.BgImage1 +")"}}>
                    <div className="container">
                        <div className="row">
                            {pricingBlog.map((data, ind)=>(
                                <div className="col-lg-4 col-md-6 m-b30" key={ind}>
                                    <div className={`pricingtable-wrapper box-hover style-1 ${ ind === hoverEffect ? 'active' : '' }`}
                                        onMouseEnter={()=>setHoverEffect(ind)}
                                    >
                                        <div className="pricingtable-inner">
                                            <div className={`pricingtable-title ${data.prime}`} >{data.title}</div>
                                            
                                            <div className="pricingtable-price">
                                                <h2 className="pricingtable-bx text-primary">${data.rate}<small>/ Mes </small></h2>
                                                <p>Una buena opción a la hora de trabajar remotamente con tus clientes</p>
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Entrenador personalizado</li>
                                                <li>Guia de alimentaci&oacute;n</li>
                                                <li>Eventos</li>
                                                <li>Clases  de baile </li>
                                                <li>Seguimiento</li>
                                            </ul>
                                            <div className="pricingtable-footer"> 
                                                <Link to={"/contact-us"} className="btn btn-primary btn-skew"><span>Contactanos</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}                        
                        </div>
                    </div>
                </section>
                <section className="call-action style-1 footer-action">
			        <div className="container">
                        <NewsLetter />
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default Pricing;