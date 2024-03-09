import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';
import { IMAGES } from '../constants/theme';
import BlogGridSlider from '../elements/BlogGridSlider';
import NewsLetter from '../elements/NewsLetter';
import PageTitle from '../elements/PageTitle';

const cardBlog = [
    {image1: IMAGES.bloggrid1, image2: IMAGES.avatar1, author: "Dr Camilo de Keneddy", title:"Entrenamientos de cadera", date:"01 Mar 2024", },
    {image1: IMAGES.bloggrid2, image2: IMAGES.avatar2, author: "Maria Mendel", title:"Ejercicios para  tu estiramientos", date:"04 Mar 2024", },
    {image1: IMAGES.bloggrid3, image2: IMAGES.avatar3, author: "Akira", title:"Solucion a tu aumento de peso", date:"22 May 2024", },
    
];
const cardBlog2 = [
    // {image1: IMAGES.bloggrid6, image2: IMAGES.avatar1, author: "Atrin", title:"14 Days To A Better Fitness.", date:"17 May 2023", },
    // {image1: IMAGES.bloggrid7, image2: IMAGES.avatar2, author: "Deep", title:"3 Ways Create Better Fitness.", date:"16 May 2023", },
    // {image1: IMAGES.bloggrid8, image2: IMAGES.avatar3, author: "Noare", title:"What Can You Do About Fitness.", date:"22 May 2023", },
];

const Recomendaciones = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Tus Recomendaciones" parentTitle="Sugerencias" />    
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {cardBlog.map((data, index)=>(
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

export default Recomendaciones;