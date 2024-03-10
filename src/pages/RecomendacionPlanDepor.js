import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import BlogSidebar from '../elements/BlogSidebar';
import NewsLetter from '../elements/NewsLetter';
import PageTitle from '../elements/PageTitle';


const mediaBlog = [
    {image1: IMAGES.vegetales, image2: IMAGES.avatar1, author: "Dr Camilo De Kennedy", title:"Plan equilibrio y vitalidad ", date:"17 Mayo 2024", },
    {image1: IMAGES.aboutExcercise1, image2: IMAGES.avatar2, author: "Maria  Mendel", title:"Ejercios para reducir abdomen", date:"18 Mayo 2024", },
    {image1: IMAGES.aboutElisa3, image2: IMAGES.avatar3, author: "Bucher", title:"5 Habitos para tener una mente positiva", date:"22 Marzo 2024", },
    
];

const RecomendacionPlanDepor = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Recomendaciones personales" parentTitle="Sugerencias" />
                <section className="animate__animated animate__fadeInRightBig">
               
                    <div className="container">
                        <div className='row'>
                        <h4 className='title mb-4'>Estos son los planes alimenticios que te recomendamos de acuerdo a la información que proporcionaste</h4>

                        </div>
                        <div className="row ">
                            <div className="col-xl-11 col-lg-11">
                                <div className="row">
                                    {mediaBlog.map((item, ind)=>(
                                        <div className="col-lg-12 m-b40" key={ind}>
                                            <div className="dz-card style-1 overlay-shine m-b40">
                                                <div className="dz-media">
                                                    <Link to={"/blog-details"}><img src={item.image1} alt="" /></Link>
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-author">
                                                                <Link to={"#"}>
                                                                    <img src={item.image2} alt="" /> {" "}
                                                                    <span>By {item.author}</span>
                                                                </Link>
                                                            </li>{" "}
                                                            <li className="post-date"><Link to={"#"}> {item.date}</Link></li>{" "}
                                                            
                                                        </ul>
                                                    </div>
                                                    <h4 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h4>
                                                    <p>Donec accumsan enim sit amet dolor rhoncus scelerisque. Suspendisse dictum, enim a interdum facilisis.</p>
                                                    <Link to={"/blog-details"} className="btn btn-primary btn-skew"><span>Leer mas.</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-lg-12 m-b40">
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination text-center m-t20">
                                                <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link active"><span>1</span></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link"><span>2</span></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link"><span>3</span></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link"><span>4</span></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    
                                </div>   
                            </div>
                           
                        </div>
                    </div>
                </section>
           
   
            </div>   
        </>
    );
};

export default RecomendacionPlanDepor;