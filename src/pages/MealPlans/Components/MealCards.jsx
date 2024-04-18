import { Link } from "react-router-dom";
import React, { useState } from 'react';




const MealCard = ({ item, hover, setHover }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (tipo) => {
    setSelectedPlan(tipo);
  };



  return (
    <div className="col-xl-3 col-md-6 m-b30" key={item.id}>
      <div
        className={`icon-bx-wraper style-1 box-hover ${
          hover === item.id ? "active" : ""
        }`}
        onMouseEnter={() => setHover(item.id)}
      >
        <div className="icon-bx m-b30">
          <span className="icon-cell">
            <img src={item.imagen} alt="" />
          </span>
        </div>
        <div className="icon-content">
          <h3 className="dz-title m-b10">
            <Link to={"#"}>{item.tipo}</Link>
          </h3>
          <h5 className="dz-title m-b10">
            <Link to={"#"}>{item.descripcion}</Link>
          </h5>
          <Link
            to={`/services/Alimento/${item.id}`}
            className="btn btn-primary shadow-primary btn-skew"
          >
            <span>Leer Mas...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;


