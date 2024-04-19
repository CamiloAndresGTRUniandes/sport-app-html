import { useState } from 'react';
import { IMAGES } from '../../../constants/theme';
import PageTitle from '../../../elements/PageTitle';
import RecommendationCard from '../Components/RecommendationCard';
import useRecommendation from '../Hooks/useRecommendation';
import { Pagination } from 'react-bootstrap';

export const RecommendationPage = () => {
  const { recommendation, hover, setHover, handlePageChange, totalPages } = useRecommendation();

  const onPageChange = (page) => {
    setHover(page);
  };

  return (
    <div className="page-content bg-white animate__animated animate__fadeInRightBig">
      <PageTitle activePage="Tus Recomendaciones" parentTitle="Sugerencias" />
      <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}>
        <div className="container">
          <div className="row">
            {recommendation.map((item) => (
              <RecommendationCard key={item.id} item={item} onPageChange={onPageChange} hover={hover} setHover={setHover} />
            ))}
          </div>
        </div>
        <div className="pagination justify-content-center">
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
      </section>
    </div>
  );
};

export default RecommendationPage;