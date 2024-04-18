
import { IMAGES } from '../../../constants/theme';
import PageTitle from '../../../elements/PageTitle';
import useMeal from '../Hooks/useMeal';
import MealCard from '../Components/MealCards';

export const MealPage = () => {
    const {
        meal,
        hover,
        setHover,
       
    } = useMeal();
  

    return (
        <div className="page-content bg-white">
          <PageTitle activePage="Planes Alimenticios" parentTitle="Planes Alimenticios" />
          <section
            className="content-inner overflow-hidden"
            style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}
          >
            <div className="container">
              <div className="row">
                {meal.map((item) => (
                  <MealCard
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
    

export default MealPage;