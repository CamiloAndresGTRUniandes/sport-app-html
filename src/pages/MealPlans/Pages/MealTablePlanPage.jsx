import { Link } from 'react-router-dom';
import { IMAGES } from '../../../constants/theme';
import PageTitle from "../../../elements/PageTitle";
import MealTablePlan from '../Components/MealTablePlan';

const MealTablePlanPage = () => {
  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage="Planes alimenticios" parentTitle="Planes" />
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
                <MealTablePlan></MealTablePlan>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealTablePlanPage;
