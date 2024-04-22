import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useMealTablePlan } from "../Hooks/useMealTablePlan";
import { useNavigate } from "react-router-dom";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";
import { Alert } from "react-bootstrap";

const goalId = "9bd21ea0-4fe6-46b4-b974-ba594883ffe0"; // ID del objetivo

const MealTablePlan = () => {
    const { initialData, goal, GetDataAsync, mealLoading, error } = useMealTablePlan(goalId);
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
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Plan</th>
                    <th>Suscripción</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(initialData) &&
                    initialData.map((item, index) => (
                        <tr key={index}>
                            <td className="highlighted-cell event">{item.name}</td>
                            <td className="event">
                                <img src={item.picture} alt={item.name} width={150} height={150} />
                            </td>
                            <td className="event">{goal.name}</td> {/* Muestra el nombre del objetivo */}
                            <td className="event">{item.price}</td>
                            <td className="event">{item.description}</td>
                            <td className="event">{item.plan.name}</td>
                            <td>
                                <button
                                    className="btn btn-primary shadow-primary btn-skew mt-2"
                                    onClick={() => navigate(`/subscribe/${item.id}`)}
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
