import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useDetailMealTable } from "../../Hooks/NutritionalPlan/useDetailMealTable";
import { SpinnerSportApp } from "../../../Utils/SpinnerSportApp";
import { Alert } from "react-bootstrap";

const DetailTrainingTable = () => {
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
                    
                    <th>Entrenamiento</th>
                    <th>Ejercicio</th>
                    <th>Descripción</th>
                    <th>Sets</th>
                    <th>Repeticiones</th>
                    <th>Peso</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
            {plan?.trainingPlan?.trainings.map((training) => (
                    training.exercises.map((exercise) => (
                        <tr key={exercise.id}>
                            <td>{training.name}</td>
                            <td>{exercise.name}</td>
                            <td>{exercise.description}</td>
                            <td>{exercise.sets}</td>
                            <td>{exercise.repeats}</td>
                            <td>{exercise.weight}</td>
                            <td><img src={exercise.picture} alt={exercise.name} width={200} height={200} /></td>
                        </tr>
                    ))
                ))}
            </tbody>
        </Table>
    );
};

export default DetailTrainingTable;