// En el componente padre (RecomendacionDetailPage)

import { IMAGES } from '../../../constants/theme';
import PageTitle from '../../../elements/PageTitle';
import useRecommendationDetail from '../Hooks/useRecommendationDetail';
import Recommendation from '../Components/Recommendation';

export const RecomendacionDetailPage = () => {
    const {
        recommendationdetail,
        hover,
        setHover,
        selectedTitle,
        setSelectedTitle,
    } = useRecommendationDetail();

    return (
        <div className="page-content bg-white">
          <PageTitle activePage={selectedTitle} parentTitle={selectedTitle}  /> {/* Usar selectedTitle */}
          <section
            className="content-inner overflow-hidden"
            style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}
          >
            <div className="container">
              <div className="row">
                {recommendationdetail.map((item) => (
                  <Recommendation
                    key={item.id}
                    item={item}
                    hover={hover}
                    setHover={setHover}
                    setSelectedTitle={setSelectedTitle} // Pasar la función setSelectedTitle como prop
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    };
    

export default RecomendacionDetailPage;
