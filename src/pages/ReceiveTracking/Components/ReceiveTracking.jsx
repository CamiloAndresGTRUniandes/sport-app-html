import { Link } from 'react-router-dom';
import { IMAGES } from '../../../constants/theme';
import { format } from 'date-fns';

const ReceiveTrackingDetail = ({ receiveTrackingDetail }) => {
  // Formatear la fecha al estilo "MMM dd, yyyy"
  const formattedDate = format(new Date(receiveTrackingDetail.createdAt), 'MMM dd, yyyy');

  return (
    <section className="content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 mb-2">
            <div className="blog-single dz-card sidebar">
              <div className="dz-media">
                <img style={{ width: '400px' }} src={receiveTrackingDetail.image} alt="" />
              </div>
              <div className="dz-info m-b30">
                <div className="dz-meta">
                  <ul>
                    <li className="post-author">
                      <Link to="#">
                        <img src={receiveTrackingDetail.image} width="400px" alt="" />
                        <span>{receiveTrackingDetail.name}</span>
                      </Link>
                    </li>
                    <li className="post-date">
                      <Link to="#">{formattedDate}</Link>
                    </li>
                  </ul>
                </div>
                <h2 className="dz-title">{receiveTrackingDetail.title}</h2>
                <div className="dz-post-text recommendation-descripcion">
                  <p>{receiveTrackingDetail.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiveTrackingDetail;
