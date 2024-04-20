import { useParams } from 'react-router-dom';
import PageTitle from '../../../elements/PageTitle';
import RecommendationDetailPresentation from '../Components/Recommendation';
import useRecommendationDetail from '../Hooks/useRecommendationDetail';


const RecomendacionDetail = () => {
  const { id } = useParams();
  const { recommendationDetail, loading } = useRecommendationDetail(id);

  return (
    <div className="page-content bg-white animate__animated animate__fadeInRightBig">


      <PageTitle activePage={recommendationDetail.titulo} parentTitle={recommendationDetail.titulo}  />
  
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <RecommendationDetailPresentation recommendationDetail={recommendationDetail} />
      )}
    </div>
  );
};

export default RecomendacionDetail;