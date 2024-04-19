import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, hover, setHover }) => {
  return (
    <div className="col-xl-3 col-md-6 m-b30" key={item.id}>
    <div className="dz-card style-1 overlay-shine">
    <div className="dz-media recommendationimg">
          <img src={item.picture} alt="" />
      </div>
      <div className="dz-info recommendation-card">
        
        <div className="icon-content">
          <h5 className="dz-title m-b10">
            <Link to={"#"}>{item.name}</Link>
          </h5>
          <Link
            to={"/services-details-table"}
            className="btn btn-primary shadow-primary btn-skew"
          >
            <span>Leer más</span>
          </Link>
        </div>
        
      </div>
      </div>
 
      </div>
    
  );
};

export default ServiceCard;