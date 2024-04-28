import { useParams } from 'react-router-dom';
import PageTitle from '../../../elements/PageTitle';
import ReceiveTrackingDetail from '../Components/ReceiveTracking';
import useReceiveTrackingDetail from '../Hooks/useReceiveTrackingDetail';


const ReceiveTrackingDetailPage = () => {
  const { id } = useParams();
  const { receiveTrackingDetail , loading } = useReceiveTrackingDetail(id);

  return (
    <div className="page-content bg-white animate__animated animate__fadeInRightBig">


      <PageTitle activePage={receiveTrackingDetail.title} parentTitle={receiveTrackingDetail.title}  />
  
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ReceiveTrackingDetail receiveTrackingDetail={receiveTrackingDetail} />
      )}
    </div>
  );
};

export default ReceiveTrackingDetailPage;