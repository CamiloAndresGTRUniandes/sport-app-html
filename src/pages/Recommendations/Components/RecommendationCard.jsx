import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';

const RecommendationCard = ({ item, onCardClick }) => {



  return (
    <div className="col-md-6 col-xl-4 m-b30"  key={item.id} onClick={() => onCardClick(item.id)}>
      
      <div className="dz-card style-1 overlay-shine">
        <div className="dz-media recommendationimg">
          <Link to="/Recomendacion-Detail">
            <img src={item.imagen} alt="" />
          </Link>
        </div>
        <div className="dz-info recommendation-card">
          <div className="dz-meta">
            <ul>
              <li className="post-author img-recommendation">
                <Link to="#">
                  <img src={item.imagen} alt="" /> <span>Por {item.author}</span>
                </Link>
              </li>
              <li className="post-date">
                <Link to="#"> {item.fecha}</Link>
              </li>
            </ul>
          </div>
          <h4 className="dz-title">
            <Link to={`/Recomendacion-Detail/${item.id}`}>{item.titulo}</Link>
          </h4>
          <p>{item.comentario}</p>
          <div className="dz-button recommendation">
            <Link to={`/Recomendacion-Detail/${item.id}`} className="btn btn-primary btn-skew">
              <span>Leer más</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;