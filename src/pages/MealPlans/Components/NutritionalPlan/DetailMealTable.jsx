import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useDetailMealTable } from "../../Hooks/NutritionalPlan/useDetailMealTable";
import { SpinnerSportApp } from "../../../Utils/SpinnerSportApp";
import { Alert } from "react-bootstrap";

const DetailMealTable = () => {
    const { productId } = useParams(); // Obtener el `productId` de la ruta
    const { initialData, GetDataAsync, mealLoading, error } = useDetailMealTable(productId); // Usar el custom hook con el `productId`

    // Asegurarse de llamar a `GetDataAsync` al montar el componente
    useEffect(() => {
        if (productId) {
            GetDataAsync(); // Llama al `GetDataAsync` solo si el `productId` es válido
        }
    }, [productId, GetDataAsync]); // Dependencias correctas para `useEffect`

    // Mostrar el spinner si está cargando
    if (mealLoading) {
        return <SpinnerSportApp />;
    }

    // Mostrar un mensaje de error si algo salió mal
    if (error) {
        return <Alert variant="danger">Error: {error}</Alert>; // Manejar errores
    }

    // Encontrar el plan correcto usando el `productId`
    const plan = initialData?.productId === productId ? initialData : null; // Verificar si el `plan` es el correcto

    // Mostrar un mensaje si no se encuentra un plan
    if (!plan) {
        return <Alert variant="info">No se encontraron datos para el producto</Alert>;
    }

    // Devuelve la tabla si `plan` contiene datos válidos
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
                            <td>{day.name}</td>
                            <td>{meal.name}</td>
                            <td>{meal.description}</td>
                            <td>{meal.calories}</td>
                            <td>{meal.dishType}</td>
                            <td><img src={meal.picture} alt={meal.name} width={200} height={200} /></td>
                        </tr>
                    ))
                ))}
            </tbody>
        </Table>
    );
};

export default DetailMealTable;
