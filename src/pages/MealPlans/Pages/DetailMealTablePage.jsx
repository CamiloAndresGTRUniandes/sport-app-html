import { useParams } from 'react-router-dom';
import { IMAGES } from "../../../constants/theme";
import PageTitle from "../../../elements/PageTitle";
import DetailMealTable from "../Components/DetailMealTable";
import React, { useEffect} from "react";
import { useDetailMealTable } from "../Hooks/useDetailMealTable";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";
import { Alert } from "react-bootstrap";


const DetailMealTablePage = () => {

  const { productId } = useParams(); // Obtén el productId de la ruta
  const { initialData, mealLoading, error } = useDetailMealTable();

  // Encuentra el plan que coincide con el productId
  const plan = initialData?.find((item) => item.productId === productId); // Manejo de null o undefined

  useEffect(() => {
      if (plan) {
          document.title = `Plan Alimenticio - ${plan.name}`; // Cambia el título de la página
      }
  }, [plan]); // Se ejecuta cuando el plan cambia

  if (mealLoading) {
      return <SpinnerSportApp />; // Indicador de carga
  }

  if (error) {
      return <Alert variant="danger">{error}</Alert>; // Muestra errores
  }

  if (!plan) {
      return <Alert variant="warning">Plan no encontrado</Alert>; // Manejo de plan no encontrado
  }

  return (
    <>
      <div className="page-content bg-white animate__animated animate__fadeInRightBig">
        <PageTitle activePage={plan.name} parentTitle="Planes Alimenticios" />
        <div
          className=""
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row mt-5">
              <div className="schedule-table table-responsive">
                <DetailMealTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMealTablePage;



