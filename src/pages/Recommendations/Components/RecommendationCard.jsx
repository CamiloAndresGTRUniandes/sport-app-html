import { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Necesario para popovers
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { format } from 'date-fns'; 


const RecommendationCard = ({ item, onCardClick }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const words = item.description.split(' ');
  const shortDescription = words.slice(0, 20).join(' ');
  const hasMore = words.length > 20;

  const handleDescriptionClick = (e) => {
    e.stopPropagation();
    setShowFullDescription(true);
  };

  const formattedDate = format(new Date(item.createdAt), 'MMM dd, yyyy');

  const popover = (
    <Popover id="popover-description">
      <Popover.Body>{item.description}</Popover.Body>
    </Popover>
  );

  return (
    <div className="col-md-6 col-xl-4 m-b30"  key={item.id} onClick={() => onCardClick(item.id)}>
      
      <div className="dz-card style-1 overlay-shine">
        <div className="dz-media recommendationimg">
          <Link to={`/Recomendacion-Detail/${item.id}`}>
            <img src={item.image} alt="" />
          </Link>
        </div>
        <div className="dz-info recommendation-card">
          <div className="dz-meta">
            <ul>
              <li className="post-author img-recommendation">
                <Link to="#">
                  <img src={item.image} alt="" />
                  <span>Por:{item.userAsociate.name}</span>
                </Link>
              </li>
              <br />
              <li className="post-date"><Link to={"#"}> Fecha:{formattedDate}</Link></li>
            </ul>
          </div>

          <h4 className="dz-title">
            <Link to={`/Recomendacion-Detail/${item.id}`}>{item.title}</Link>
          </h4>
          <OverlayTrigger
            trigger={['hover', 'focus']} 
            placement="top"
            overlay={popover}
          >
            <p>
              {shortDescription}
              {hasMore ? '...' : ''} 
            </p>
          </OverlayTrigger>
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

