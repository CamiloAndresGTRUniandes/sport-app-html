import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES,SVGICON } from '../constants/theme';


const Footer = () => {
    let update = new Date();
    return (
        <>
            <footer className="site-footer style-1 bg-img-fix footer-action" style={{backgroundImage: "url("+ IMAGES.footerbg +")"}} id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-12">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-dark">
                                        <Link to={"/"}><img className='select_logo_dark' src={IMAGES.logo} alt="" /></Link> 
                                    </div>
                                    <p>Una maravillosa serenidad se ha apoderado de toda mi alma, como éstas.
                                        </p>
                                    <h6 className="m-b15">Nuestras redes sociales</h6>
                                    <div className="dz-social-icon style-1">
                                        <ul>									
                                            <li>
                                                <Link target="_blank" to="https://www.facebook.com/" rel="noreferrer">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>{" "}
                                            <li>
                                                <Link target="_blank" to="https://twitter.com/?lang=en" rel="noreferrer">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>{" "}
                                            <li>
                                                <Link target="_blank" to="https://www.instagram.com/?hl=en" rel="noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>{" "}
                                            <li>
                                                <Link target="_blank" to="https://www.whatsapp.com/" rel="noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="widget recent-posts-entry">
                                    <h4 className="footer-title">Blog Posts</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}>
                                                La filosofia del mejor entrenamiento
                                                    </Link></h6>
                                                <span className="post-date"> Febrero 24, 2024</span>
                                            </div>
                                        </div>
                                        <div className="post-separator"></div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}> Los mejores 50 Tips Saludables</Link></h6>
                                                <span className="post-date"> AGOSTO 22, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="widget widget_locations">
                                    <h4 className="footer-title">Localizaciones</h4>
                                    <div className="clearfix">
                                        <h6>Puerto boyaca</h6>
                                        <p>Calle  96 , Puerto boyaca,Colombia</p>
                                        {SVGICON.map}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="widget widget_working">
                                    <h4 className="footer-title">Horarios de trabajo</h4>
                                    <ul>
                                        <li>
                                            <span className="days">Lunes – Viernes:</span>
                                            <span className="time"><Link to={"/schedule"}>07:00 – 21:00</Link></span>
                                        </li>
                                        <li>
                                            <span className="days">Sabado:</span>
                                            <span className="time"><Link to={"/schedule"}>07:00 – 16:00</Link></span>
                                        </li>
                                        <li>
                                            <span className="days">SDomingo Cerrado</span>
                                        </li>
                                    </ul>
                                    <Link to={"/schedule"} className="btn-link" >Mas informaci&oacute;n <i className="fa-solid fa-arrow-right m-l10"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Bottom Part --> */}
                <div className="container">
                    <div className="footer-bottom">
                        <div className="text-center"> 
                            <span className="copyright-text">Copyright © {update.getFullYear()} <Link to="https://dexignzone.com/" rel="noreferrer" target="_blank" >Grupo  13</Link>. All rights reserved.</span> 
                        </div>
                    </div>
                </div>
                <img className="girl-img" src={IMAGES.footergril1} alt="" />
                <img className="svg-shape-1 rotate-360" src={IMAGES.footercircle} alt="" />
                <img className="svg-shape-2 rotate-360" src={IMAGES.footercircle} alt="" />
            </footer>
        </>
    );
};

export default Footer;