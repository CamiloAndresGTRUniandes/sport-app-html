import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const DzMedia = ({Image}) =>{
    return(
        <div className="col-xl-3 col-md-6">
            <div className="dz-media">
                <img src={Image}  style={{
                    maxHeight:'450px'
                }}  alt="" />
            </div>
        </div>
    )
}

const DzInfo1 = ({title, subtitle}) =>{
    return(
        <div className="col-xl-3 col-md-6">
            <div className="dz-info bg-secondary">
                <div className="clearfix text-white">
                    <span className="text-primary subtitle">{title}</span>
                    <h4 className="title text-white">{subtitle}</h4>
                    <p>
                    Mejora la aptitud física general de las personas. Esto se logra a través de un entrenamiento variado e intenso que trabaja diferentes capacidades física
                    </p>
                    <Link to={"/services-details"} className="btn btn-primary btn-skew"><span>Leer mas</span></Link>
                </div>
            </div>
        </div>        
    )
}
const DzInfo2 = ({title, subtitle}) =>{
    return(
        <div className="col-xl-3 col-md-6">
            <div className="dz-info bg-primary">
                <div className="clearfix theme-text-color">
                    <span className="subtitle">{title}</span>
                    <h4 className="title theme-text-color">{subtitle}</h4>
                    <p>Queremos que tengas un balance corporal es un estado de equilibrio entre la ingesta calórica y el gasto energético. Esto significa que consumes la misma cantidad de calorías que quemas, lo que te permite mantener un peso saludable.</p>
                    <Link to={"/services-details"} className="btn btn-secondary btn-skew"><span>Leer mas</span></Link>
                </div>
            </div>
        </div>
    )
}

const FitnessTraining = () => {
    return (
        <>
            <div className="row g-0">
                <DzInfo1 title="FORMA TU CUERPO" subtitle="CROSSFIT" />
                <DzMedia  Image = {IMAGES.danielTrainer } />
                <DzInfo2 title="RELAX PROGRAM" subtitle="BALANCE CORPORAL"/>
                <DzMedia  Image = {IMAGES.aboutElisa2 } />
                <DzMedia  Image = {IMAGES.aboutElisa3 } />
                <DzInfo2 title="CARDIO WORKFLOW" subtitle="CARDIO"/>
                <DzMedia  Image = {IMAGES.aboutElisa4 } />                
                <DzInfo1 title="POWER-PRO" subtitle="WEIGHT LIFTING" />
            </div>  
        </>
    );
};

export default FitnessTraining;