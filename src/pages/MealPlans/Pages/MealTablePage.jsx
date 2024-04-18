import { IMAGES } from "../../../constants/theme";
import PageTitle from "../../../elements/PageTitle";
import MealTable from "../Components/MealTable"


const MealTablePage = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Planes Alimenticios" parentTitle="Planes Alimenticios" />
        <div
          className="animate__animated animate__fadeInRightBig"
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row">
            <div className="schedule-table table-responsive">
              <MealTable></MealTable>
            </div>

            </div>

          </div>
        </div>
      
      </div>
    </>
  );
};

export default MealTablePage;