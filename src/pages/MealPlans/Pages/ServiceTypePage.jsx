import { IMAGES } from '../../../constants/theme';
import PageTitle from "../../../elements/PageTitle";
import MealTablePlan from '../Components/NutritionalPlan/MealTablePlan';
import TrainingTablePlan from '../Components/TrainingPlan/TrainingTablePlan';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// istanbul ignore next
const ServiceTypePage = () => {
  const [isNutritionalPlan, setIsNutritionalPlan] = useState(false);
  const [isTrainingPlan, setIsTrainingPlan] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const { serviceTypeId } = useParams();

  useEffect(() => {
    switch (serviceTypeId) {
      case "01b50f0d-3226-4df2-b912-4da4b37d9bd9":
        setIsNutritionalPlan(true);
        setIsTrainingPlan(false);
        setPageTitle("Planes alimenticios");
        break;
      case "3040214a-a77d-4549-8f67-6b51f7755a3e":
        setIsTrainingPlan(true);
        setIsNutritionalPlan(false);
        setPageTitle("Planes de entrenamiento");
        break;
      default:
        setIsNutritionalPlan(false);
        setIsTrainingPlan(false);
        setPageTitle("Otros Planes");
        break;
    }
  }, [serviceTypeId]); // Asegúrate de tener la dependencia correcta para que se actualice cuando cambie serviceTypeId

  return (
    <div className="page-content bg-white animate__animated animate__fadeInRightBig">
      <PageTitle activePage={pageTitle} parentTitle="Servicios" />
      <div
        style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}
      >
        <div className="container">
          <div className="row col-12">
            <div className="col-lg-5 col-sm-1"></div>
            <div className="col-lg-5 col-sm-11 mb-3">
              <div className="input-line input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar..."
                  aria-label="Buscar"
                  aria-describedby="nombre"
                  disabled
                />
                <span>
                  <i className="fa-solid fa-magnifying-glass mt-2" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="schedule-table table-responsive">
              {isNutritionalPlan && <MealTablePlan />}
              {isTrainingPlan && <TrainingTablePlan />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypePage;
