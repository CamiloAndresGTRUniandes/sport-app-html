import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../../constants/theme';
import { usePricingCard } from '../Hooks/usePricingCard';




const PricingCard = () => {
    const [hoverEffect, setHoverEffect] = useState(1);
    const { GetDataAsync,
        pricingBlog } = usePricingCard();
    useEffect(() => {
        GetDataAsync();
    }, []);
    return (
        <>
            {pricingBlog.map((data, ind) => (
                <div className="col-lg-4 col-md-6 m-b30" key={ind}>
                    <div className={`pricingtable-wrapper box-hover style-1 ${ind === hoverEffect ? 'active' : ''}`}
                        onMouseEnter={() => setHoverEffect(ind)}
                    >
                        <div className="pricingtable-inner">
                            <div className={`pricingtable-title premium`} >{data.name}</div>

                            <div className="pricingtable-price">
                                {data.price > 0 && <h2 className="pricingtable-bx text-primary">${data.price}<small>/ Mes </small></h2>}
                                {data.price <= 0 && <h2 className="pricingtable-bx text-primary">Free</h2>}
                                <p>Una buena opción a la hora de trabajar remotamente con tus clientes</p>
                            </div>
                            <ul className="pricingtable-features">
                                <li>
                                    <i className="pricing-icon fa-sharp fa-solid fa-circle-check"> </i>
                                    Entrenamientos predefinidos </li>
                                <li>
                                    {data.name === "Premium" && <i className="pricing-icon fa-sharp fa-solid fa-circle-check"> </i>}
                                    {(data.name === "Intermediate" || data.name === "Basic") && <i className=" pricing-icon fa-sharp fa-solid fa-circle-xmark"></i>}Entrenador personalizado</li>
                                <li>
                                    {(data.name === "Intermediate" || data.name === "Premium") && <i className="pricing-icon fa-sharp fa-solid fa-circle-check"> </i>}
                                    {data.name === "Basic" && <i className=" pricing-icon fa-sharp fa-solid fa-circle-xmark"></i>}
                                    Guia de alimentaci&oacute;n</li>
                                <li>{(data.name === "Basic" || data.name === "Intermediate" || data.name === "Premium") && <i className="pricing-icon fa-sharp fa-solid fa-circle-check"> </i>}
                                    Eventos</li>
                                <li>
                                    {data.name === "Premium" && <i className="pricing-icon fa-sharp fa-solid fa-circle-check"> </i>}
                                    {(data.name === "Intermediate" || data.name === "Basic") && <i className=" pricing-icon fa-sharp fa-solid fa-circle-xmark"></i>}
                                    Seguimiento</li>
                            </ul>
                            <div className="pricingtable-footer">
                                <Link
                                    to={`/subscription/${data.id}`}
                                    className="btn btn-primary btn-skew">
                                    <span>Comprar</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};
export default PricingCard;
