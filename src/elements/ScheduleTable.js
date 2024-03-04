import React from 'react';
import {Link} from 'react-router-dom';

const ScheduleTable = () => {
    return (
        <>
            <table className="table-responsive-md ck-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sabado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row_1">
                        <td className="event-time"> 06:00 - 07:00 </td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title">Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title">Clase de Crossfit</Link>
                            <span className="subtitle">Camilo Andres Guevara</span>
                            <div className="event-tag">Entrenamiento</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="event" rowspan="4">
                            <Link to={"#"} className="title">Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                    </tr>
                    <tr className="row_2">
                        <td className="event-time"> 07:00 - 08:00 </td>
                        <td className="event" rowspan="3">
                            <Link to={"#"} className="title">Elevación eléctrica</Link>
                            <span className="subtitle">Camilo Andres Guevara</span>
                            <div className="event-tag">Fuerza</div>
                        </td>
                        <td></td>
                        <td className="event" rowspan="3">
                            <Link to={"#"} className="title">Elevación eléctrica</Link>
                            <span className="subtitle">Camilo Andres Guevara</span>
                            <div className="event-tag">Fuerza</div>
                        </td>
                        <td className="event">
                            <Link to={"#"} className="title">Cardio</Link>
                            <span className="subtitle">Elisa Mendel</span>
                            <div className="event-tag">Aerobicos</div>
                        </td>
                    </tr>
                    <tr className="row_3">
                        <td className="event-time"> 08:00 - 09:00 </td>
                        <td></td>
                        <td className="event" rowspan="4">
                            <Link to={"#"} className="title" >Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="row_4">
                        <td className="event-time"> 09:00 - 10:00 </td>
                        <td></td>
                        <td className="event" rowspan="6">
                            <Link to={"#"} className="title" >Clase de Crossfit</Link>
                            <span className="subtitle">Daniel Bustos</span>
                            <div className="event-tag">Entrenamiento</div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="row_5">
                        <td className="event-time"> 10:00 - 11:00 </td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title" >Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                        <td></td>
                        <td className="event">
                            <Link to={"#"} className="title">Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title">Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="row_6">
                        <td className="event-time"> 11:00 - 12:00 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="row_7">
                        <td className="event-time"> 12:00 - 13:00 </td>
                        <td className="event">
                            <Link to={"#"} className="title" >Clase de Crossfit</Link>
                            <span className="subtitle">Yonathan Beltran Romero</span>
                            <div className="event-tag">Fuerza</div>
                        </td>
                        <td></td>
                        <td className="event">
                            <Link to={"#"} className="title" >Cardio</Link>
                            <span className="subtitle">Camilo Andres Guevara</span>
                            <div className="event-tag">Aerobicos</div>
                        </td>
                        <td className="event">
                            <Link to={"#"} className="title">Clase de Crossfit</Link>
                            <span className="subtitle">Elisa Mendel</span>
                            <div className="event-tag">Entrenamiento</div>
                        </td>
                        <td className="event">
                            <Link to={"#"} className="title" >Clase de Crossfit</Link>
                            <span className="subtitle">Camilo Guevara</span>
                            <div className="event-tag">Entrenamiento</div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="row_8">
                        <td className="event-time"> 13:00 - 14:00 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="row_9">
                        <td className="event-time"> 14:00 - 15:00 </td>
                        <td></td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title">Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title">Entrenamientos</Link>
                            <div className="event-tag">Gym</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="row_10">
                        <td className="event-time"> 15:00 - 16:00 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="row_11">
                        <td className="event-time"> 18:00 - 19:00 </td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title" >Clase de Crossfit</Link>
                            <span className="subtitle">Camilo Guevara</span>
                            <div className="event-tag">Entrenamientos</div>
                        </td>
                        <td className="event" rowspan="2">
                            <Link to={"#"} className="title">Elevación eléctrica</Link>
                            <span className="subtitle">Yonathan Beltran Romero</span>
                            <div className="event-tag">Fuerza</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="row_12">
                        <td className="event-time"> 19:00 - 20:00 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="row_13">
                        <td className="event-time"> 20:00 - 21:00 </td>
                        <td className="event">
                            <Link to={"#"} className="title">Cardio</Link>
                            <span className="subtitle">Dario Felix</span>
                            <div className="event-tag">Aerobico</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="event">
                            <Link to={"#"} className="title" >Cardio</Link>
                            <span className="subtitle">Dario Felix</span>
                            <div className="event-tag">Aerobicos</div>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ScheduleTable;