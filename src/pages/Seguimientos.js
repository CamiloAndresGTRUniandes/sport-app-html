import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { IMAGES } from '../constants/theme';
import PageTitle from '../elements/PageTitle';

const cardBlog = [
    { image1: IMAGES.bloggrid1, image2: IMAGES.avatar1, author: "Dr Camilo de Keneddy", title: "Ejercicios de Lunes", date: "01 Mar 2024", },
    { image1: IMAGES.bloggrid2, image2: IMAGES.avatar2, author: "Dr Camilo de Keneddy", title: "Ejercicios de Martes", date: "02 Mar 2024", },
    { image1: IMAGES.bloggrid3, image2: IMAGES.avatar3, author: "Dr Camilo de Keneddy", title: "Ejercicios de Miercoless", date: "03 Mar 2024", },

];


const Seguimientos = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Tus Seguimientos" parentTitle="Seguimientos" />
                <section className="animate__animated animate__fadeInRightBig">
                    <div className="container">
                        <div className="row">
                            {cardBlog.map((data, index) => (
                                <div className="col-md-6 col-xl-4 m-b30" key={index}>
                                    <div className="dz-card style-1 overlay-shine">
                                        <div className="dz-media">
                                            <Link to={"/Recomendacion-Detail"}><img src={data.image1} alt="" /></Link>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-author">
                                                        <Link to={"#"}>
                                                            <img src={data.image2} alt="" />{" "}
                                                            <span>By {data.author}</span>
                                                        </Link>
                                                    </li>{" "}
                                                    <li className="post-date"><Link to={"#"}> {data.date}</Link></li>
                                                </ul>
                                            </div>
                                            <h4 className="dz-title"><Link to={"/Recomendacion-Detail"}>{data.title}</Link></h4>
                                            <p>Hiciste  un gran  trabajo, pero tenemos que trabajar mas en ..</p>
                                            <Link to={"/Recomendacion-Detail"} className="btn btn-primary btn-skew"><span>Leer mas</span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <nav aria-label="Blog Pagination">
                                    <ul className="pagination text-center m-b30 m-t50 m-lg-t10">
                                        <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link active"><span>1</span></Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link"><span>2</span></Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="call-action style-1 footer-action">
                </section>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="X_9VoqR5ojM" onClose={() => setOpen(false)} />
        </>
    );
};

export default Seguimientos;