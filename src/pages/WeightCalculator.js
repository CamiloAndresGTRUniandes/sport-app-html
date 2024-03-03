import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import NewsLetter from '../elements/NewsLetter';
import PageTitle from '../elements/PageTitle';

const WeightCalculator = () => {
    const [selectBtn,setSelectBtn] = useState('Male');
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        nav('/weight-calculator');
    }


    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Calculadora de peso"   parentTitle="Pages" />
                <section className="content-inner overflow-hidden" style={{backgroundImage: "url(" + IMAGES.BgImage1 + ")"}}>
                    <div className="container">
                        <div className="row justify-content-between align-items-center m-b20">
                            <div className="col-lg-6">
                                <div className="section-head">
                                    <h2 className="title">Masa de Indece Coporal</h2>
                                    <p>Ven comprueba tu  peso</p>
                                </div>
                                <form className="dzForm calculator-form p-r10" onSubmit={(e)=>handleSubmit(e)} >
                                    <input type="hidden" className="form-control" name="dzToDo" value="Contact"/> 
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="form-label text-primary">Altura</label>
                                            <div className="input-group input-line">
                                                <input name="dzHeight" id="height" className="form-control" placeholder="Altura / Cm" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label text-primary">Peso / Kg</label>
                                            <div className="input-group input-line">
                                                <input name="weight" id="weight" className="form-control" placeholder="Tu peso" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label text-primary">Edad</label>
                                            <div className="input-group input-line">
                                                <input name="Age" id="age" className="form-control" placeholder="Edad" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label text-primary">Genero</label>
                                                <div className="mb-4 mb-sm-0">
                                                    <Dropdown className="select-dropdown style-1">
                                                        <Dropdown.Toggle as="div" className="select-dropdown-toggle">
                                                            {selectBtn} <i className="fa-sharp fa-solid fa-caret-down"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='mt-2'>
                                                            <Dropdown.Item onClick={()=>setSelectBtn('Masculino')}>Masculino</Dropdown.Item>
                                                            <Dropdown.Item onClick={()=>setSelectBtn('Femenino')}>Femenino</Dropdown.Item>
                                                            
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button name="submit" 
                                                type="submit" 
                                                //value="Submit" 
                                                className="btn btn-secondary btn-skew m-b30"><span>Calculo BMI</span></button>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="dzFormBmi"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 m-md-t40">
                                <div className="calculate-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>BMI</th>
                                                <th>Estatus del peso</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Bajo 18.5</td>
                                                <td>Por debajo del peso</td>
                                            </tr>
                                            <tr>
                                                <td>18.5 - 24.9</td>
                                                <td>Saludable</td>
                                            </tr>
                                            <tr>
                                                <td>25.0 - 29.9</td>
                                                <td>Sobre peso</td>
                                            </tr>
                                            <tr>
                                                <td>30.0 - o Superior</td>
                                                <td>Obesidad</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="weight-info">
                                        <span><b>BMR</b> Promedio Metabolico / <b>BMI</b> Indice de la Masa Corporal </span>
                                    </div>
                                </div>
                            </div>
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

export default WeightCalculator;
