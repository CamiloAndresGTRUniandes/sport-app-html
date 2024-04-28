import { IMAGES } from '../../../constants/theme';
import PageTitle from '../../../elements/PageTitle';
import useService from '../Hooks/useService'
import ServiceCard from "../Components/ServiceCard";

export const Services = () => {
    const {
        services,
        hover,
        setHover,
       
    } = useService();
  

    return (
        <div className="page-content bg-white">
          <PageTitle activePage="Servicios" parentTitle="ServiciosNew" />
          <section
            className="content-inner overflow-hidden"
            style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}
          >
            <div className="container">
              <div className="row">
                {services.map((item) => (
                  <ServiceCard
                    key={item.id}
                    item={item}
                    hover={hover}
                    setHover={setHover}
                    
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    };
    

export default Services;
