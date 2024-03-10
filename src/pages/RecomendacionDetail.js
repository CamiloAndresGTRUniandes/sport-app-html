import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import PageTitle from '../elements/PageTitle';

const Comment = ({ image, title }) => {
    return (

        <div className="comment-body">
            <div className="comment-author vcard">
                <img className="avatar photo" src={image} alt="" />
            </div>
            <div className="comment-info">
                <div className="title">
                    <cite className="fn">{title}</cite>
                    <span>07 March, 2023</span>
                </div>
                <p>Integer consectetur diam vitae imperdiet iaculis. In faucibus, sem sit amet tincidunt egestas, magna ligula interdum leo.</p>
                <div className="reply">
                    <Link to={"#"} className="comment-reply-link"><span><i className="fa-solid fa-share"></i>REPLY</span></Link>
                </div>
            </div>
        </div>

    )
}

const RecomendacionDetail = () => {
    return (
        <>
            <div className="page-content bg-white animate__animated animate__fadeInRightBig">
                <PageTitle activePage="Ejercicios de cadera" parentTitle="Sugerencias" />
                <section className="">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-12 col-lg-12">
                                <div className="blog-single dz-card sidebar">
                                    <div className="dz-media">
                                        <img style={{width:'400px'}}  src={IMAGES.bloggrid1} alt="" />
                                    </div>
                                    <div className="dz-info m-b30">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        <img src={IMAGES.avatar2} width='400px' alt="" /> {" "}
                                                        <span>Dr Camilo de Kennedy</span>
                                                    </Link>
                                                </li>{" "}
                                                <li className="post-date"><Link to={"#"}> 01 Mar 2024</Link></li>{" "}

                                            </ul>
                                        </div>
                                        <h2 className="dz-title">Ejercicios de entrenamiento de cadera</h2>

                                        <div className="dz-post-text">
                                            <p>
                                                La cadera es una de las articulaciones más grandes e importantes de nuestro cuerpo. También, es una de las más estables, gracias a los músculos y ligamentos que la rodean. Su función es muy importante ya que contribuye a la estabilidad del cuerpo cuando estamos de pie, caminamos o corremos, evita que las rodillas sufran toda la presión y su buen funcionamiento disminuye las probabilidades de que aparezca dolor en la zona lumbar. Además, hay que tener en cuenta que un buen fortalecimiento muscular de la cadera, nos ayudará a prevenir las lesiones típicas de esta zona del cuerpo, nos ayudará a mejorar nuestro rendimiento al correr y juega un papel destacado en la prevención y tratamiento de la osteoporosis de cadera, una de las más frecuentes. A pesar de todo ello, a menudo descuidamos el fortalecimiento de las caderas en nuestra rutina de entrenamiento, dándole más importancia a otros segmentos corporales como los abdominales, las piernas o los brazos. Vamos a ver en este artículo del blog los principales ejercicios para fortalecer nuestras caderas y prevenir estos problemas.

                                            </p>
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

export default RecomendacionDetail;