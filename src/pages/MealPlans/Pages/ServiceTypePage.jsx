
import { IMAGES } from '../../../constants/theme';
import PageTitle from "../../../elements/PageTitle";
import MealTablePlan from '../Components/NutritionalPlan/MealTablePlan';
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';



const ServiceTypePage = () => {
  
  const [isNutritionalPlan, setIsNutritionaPlan] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const {serviceTypeId} = useParams();

  useEffect(() => {
    switch(serviceTypeId) {
      case "01b50f0d-3226-4df2-b912-4da4b37d9bd9":
        setIsNutritionaPlan(true);
        setPageTitle("Planes alimenticios");
        break;
      default:
        setIsNutritionaPlan(false);
        setPageTitle("Otros Planes");
        break;
    }}, []);

  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage={pageTitle} parentTitle="Servicios" />
        <div
          className=""
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">

            <div className="row col-12 ">
              <div className="col-lg-5 col-sm-1">
              </div>
              <div className="col-lg-5 col-sm-11 mb-3">
                <div className="input-line input-group">
                  <input type="text" className="form-control" placeholder="Buscar..." aria-label="Username" aria-describedby="nombre" disabled />
                  <span>
                    <i className="fa-solid fa-magnifying-glass mt-2"></i>
                  </span>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="schedule-table table-responsive">
                {isNutritionalPlan && <MealTablePlan></MealTablePlan>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTypePage;
