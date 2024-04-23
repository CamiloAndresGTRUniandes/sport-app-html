import React, { useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useDetailMealTable } from "../Hooks/useDetailMealTable";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";
import { Alert } from "react-bootstrap";

const DetailMealTable = () => {
    const { productId } = useParams(); // Obtén el productId de la ruta
    const { initialData, GetDataAsync, mealLoading, error } = useDetailMealTable();

    // Callback para evitar bucles infinitos
    const loadData = useCallback(() => {
        GetDataAsync();
    }, [GetDataAsync]); // Dependencias correctas para evitar errores

    useEffect(() => {
        loadData(); // Llama a la función callback para obtener datos
    }, [loadData]); // Solo se ejecuta si cambian las dependencias

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
        
            
                <Table className="ck-table mb-5">
                    <thead>
                        <tr>
                            <th>Día</th>
                            <th>Comida</th>
                            <th>Descripción</th>
                            <th>Calorías</th>
                            <th>Tipo de Comida</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plan?.nutritionalPlan?.days.map((day) => (
                            day.meals.map((meal) => (
                                <tr key={meal.id}>
                                    <td className="highlighted-cell event">{day.name}</td>
                                    <td className="event">{meal.name}</td>
                                    <td className="event">{meal.description}</td>
                                    <td className="event">{meal.calories}</td>
                                    <td className="event">{meal.dishType}</td>
                                    <td className="event"><img src={meal.picture} alt={meal.name} width={200} height={200} /></td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </Table>
            
       
    );
};

export default DetailMealTable;
