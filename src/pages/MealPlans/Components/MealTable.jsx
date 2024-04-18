import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useMealTable } from '../Hooks/useMealTable';
import { useParams } from 'react-router-dom';

const MySwal = withReactContent(Swal);

const MealTable = () => {
  const { meals, loading, error } = useMealTable();
  const { mealId } = useParams();

  const getSortedWeekdays = (menu_semanal) => {
    return Object.keys(menu_semanal).sort((a, b) => {
      const daysOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      return daysOrder.indexOf(a) - daysOrder.indexOf(b);
    });
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Ocurrió un error al cargar los datos.</div>;
  }

  return (
    <>
      <table className="table-responsive-md ck-table">
        <thead>
          <tr>
            <th>Día</th>
            <th>Desayuno</th>
            <th>Almuerzo</th>
            <th>Cena</th>
            <th>Snacks</th>
          </tr>
        </thead>
        <tbody>
          {getSortedWeekdays(meals.find(meal => meal.id === mealId).menu_semanal).map(day => (
            <tr key={day}>
              <td>{day}</td>
              <td>{meals.find(meal => meal.id === mealId).menu_semanal[day]?.desayuno}</td>
              <td>{meals.find(meal => meal.id === mealId).menu_semanal[day]?.almuerzo}</td>
              <td>{meals.find(meal => meal.id === mealId).menu_semanal[day]?.cena}</td>
              <td>{meals.find(meal => meal.id === mealId).menu_semanal[day]?.snacks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MealTable;
