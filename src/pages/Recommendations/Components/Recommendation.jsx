// En el componente hijo (Recommendation)

import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../elements/PageTitle';
import '../../../assets/css/style.css';

const Recommendation = ({ item, setSelectedTitle }) => {
    const handleClick = () => {
        setSelectedTitle(item.titulo); // Actualizar el título de la tarjeta seleccionada al hacer clic en ella
    };

    return (
        <>
            <div className="page-content bg-white animate__animated animate__fadeInRightBig" onClick={handleClick}>
                <section className="">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-12 col-lg-12">
                                <div className="blog-single dz-card sidebar">
                                    <div className="dz-media">
                                        <img style={{ width: '400px' }} src={item.imagen} alt="" />
                                    </div>
                                    <div className="dz-info m-b30">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        <img src={item.imagen} width='400px' alt="" /> {" "}
                                                        <span>{item.autor}</span>
                                                    </Link>
                                                </li>{" "}
                                                <li className="post-date"><Link to={"#"}> {item.fecha}</Link></li>{" "}
                                            </ul>
                                        </div>
                                        <h2 className="dz-title">{item.titulo}</h2> {/* Usar item.titulo */}
                                        <div className="dz-post-text">
                                            <p>{item.descripcion}</p>
                                        </div>
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

export default Recommendation;
