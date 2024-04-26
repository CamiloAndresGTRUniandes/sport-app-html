import React, { useEffect } from "react";
import { Table, Alert } from "react-bootstrap";
import { useMealTablePlan } from "../Hooks/useMealTablePlan";
import { useNavigate } from "react-router-dom";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";

const goalId = "9bd21ea0-4fe6-46b4-b974-ba594883ffe0"; // ID del objetivo

const MealTablePlan = () => {
    // Obtiene `handleSubscribe` del Hook para usarlo en el componente.
    const { initialData, goal, GetDataAsync, mealLoading, error, handleSubscribe } = useMealTablePlan(goalId);
    const navigate = useNavigate();

    useEffect(() => {
        GetDataAsync();
    }, []);

    if (mealLoading) {
        return <SpinnerSportApp />;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <Table className="table-responsive-md ck-table mb-5">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Objetivo</th>
                    <th>Descripción</th>
                    <th>Plan</th>
                    <th>Suscripción</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(initialData) && initialData.map((item, index) => (
                    <tr key={index}>
                        <td
                            className="highlighted-cell event"
                            onClick={() => navigate(`/DetailMealTable/${item.productId}`)}
                        >
                            {item.name}
                        </td>
                        <td className="event">
                            <img src={item.picture} alt={item.name} width={150} height={150} />
                        </td>
                        <td className="event">{goal?.name}</td>
                        <td>{item.description}</td>
                        <td>{item.plan?.name}</td>
                        <td>
                            <button
                                className="btn btn-primary shadow-primary btn-skew mt-2"
                                onClick={() => handleSubscribe(
                                    item.productId,
                                    item.plan?.planId,
                                    item.plan?.name,
                                    item.plan?.description
                                )}
                            >
                                Suscribirse
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MealTablePlan;
