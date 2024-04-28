import React, { useState } from 'react';
import { IMAGES } from '../../../constants/theme';
import '../../../assets/css/style.css';
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";
import { Pagination } from 'react-bootstrap';
import PageTitle from '../../../elements/PageTitle';
import ReceiveTrackingCard from '../Components/ReceiveTrackingCard';
import useReceiveTracking from '../Hooks/useReceiveTracking';


export const ReceiveTrackingPage = () => {
  const { tracking, hover, setHover, totalPages,loading  } = useReceiveTracking();
  const [animationClass, setAnimationClass] = useState('');

  const onPageChange = (page) => {
    setAnimationClass('fade-out-right');
    setTimeout(() => {
      setHover(page);
      setAnimationClass('');
    }, 1000); // Ajusta el tiempo según la duración de tu animación CSS
  };

  return (
    <div className={`page-content bg-white animate__animated ${animationClass} animate__fadeInRightBig`}>
      {loading && (
        <div className="row d-flex justify-content-around mb-4">
          <SpinnerSportApp />
        </div>
      )}
      <PageTitle activePage="Tus Seguimientos" parentTitle="Sugerencias" />
      <section
            className="content-inner overflow-hidden"
            style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}
          >
        <div className="container">
          <div className="row">
            {tracking.map((item) => (
              <ReceiveTrackingCard  key={item.id} item={item} animate={item === 0 && hover === 0}  hover={hover} setHover={setHover}/>
            ))}
          </div>
        </div>
      </section>
      <div className="pagination justify-content-center" onClick={(e) => e.stopPropagation()}>
        <Pagination>
          <Pagination.Prev onClick={() => onPageChange(hover - 1)} disabled={hover === 0} />
          {[...Array(totalPages).keys()].map((page) => (
            <Pagination.Item key={page} active={page === hover} onClick={() => onPageChange(page)}>
              {page + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => onPageChange(hover + 1)} disabled={hover === totalPages - 1} />
        </Pagination>
      </div>
    </div>
  );
};

export default ReceiveTrackingPage;
