import { Link } from "react-router-dom";


const ServiceCard = ({ item, hover, setHover,to }) => {
  return (
    <div className="col-xl-3 col-md-6 m-b30" key={item.id}>
      <div
        data-testid="service-card-wrapper"
        className={`icon-bx-wraper style-1 box-hover ${
          hover === item.id ? "active" : ""
        }`}
        onMouseEnter={() => setHover(item.id)}
      >
        <div className="icon-bx m-b30">
          <span className="icon-cell">
            <img src={item.picture} alt="" />
          </span>
        </div>
        <div className="icon-content">
          <h5 className="dz-title m-b10">
            <Link to={"#"}>{item.name}</Link>
          </h5>
          <Link
            to={`/services/${item.id}`}
            className="btn btn-primary shadow-primary btn-skew"
          >
            <span>Leer más</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
