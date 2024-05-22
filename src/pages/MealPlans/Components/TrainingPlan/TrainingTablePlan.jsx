import React, { useEffect } from "react";
import { Table, Alert, Button } from "react-bootstrap";
import { useTrainingTablePlan } from "../../Hooks/TrainingPlan/useTrainingTablePlan";
import { useNavigate } from "react-router-dom";
import { SpinnerSportApp } from "../../../Utils/SpinnerSportApp";
import { Alerts } from "../../../Utils";


const { showAlertError } = Alerts();

const TrainingTablePlan = () => {
  const {
    initialData,
    GetDataAsync,
    trainingLoading,
    error,
    handleSubscribe,
    subscribedUsers,
  } = useTrainingTablePlan();

  const navigate = useNavigate();

  useEffect(() => {
    GetDataAsync();
  }, []);

  if (trainingLoading) {
    return <SpinnerSportApp />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  const currentUserStr = sessionStorage.getItem("userLogin");
  let currentUser = null;

  if (currentUserStr) {
    currentUser = JSON.parse(currentUserStr);
  }

  const isSubscribed = (userId, productId) => {
    return subscribedUsers.some(
      (user) => user.userId === userId && user.serviceId === productId
    );
  };

  return (
    <Table className="table-responsive-md ck-table mb-5">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Actividad</th>
          <th>Descripción</th>
          <th>Plan</th>
          <th>Suscripción</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(initialData) &&
          initialData.map((item, index) => (
            <tr key={index}>
              <td
                className="highlighted-cell event hand-cursor"
                
                
                onClick={() => {
                  if (currentUser) {
                    const userId = currentUser.id;
                    const productId = item.productId;

                    console.log(`Checking subscription for userId: ${userId}, productId: ${productId}`);
                    
                    if (isSubscribed(userId, productId)) {
                      console.log("User is subscribed. Navigating to detail page.");
                      navigate(`/DetailTrainingTable/${item.productId}`);
                    } else {
                      console.log("User is not subscribed. Showing alert.");
                      showAlertError(
                        "Suscripción requerida",
                        "Debes suscribirte para ver el detalle de este plan."
                      );
                    }
                  } else {
                    console.log("User not authenticated. Showing alert.");
                    showAlertError(
                      "Usuario no autenticado",
                      "Por favor, inicia sesión para ver los detalles del plan."
                    );
                  }
                }}
              >
                {item.name}
              </td>
              <td>
                <img
                  src={item.picture}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </td>
              <td>{item.goal?.name}</td>
              <td>{item.description}</td>
              <td>{item.plan?.name}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    if (currentUser) {
                      const userId = currentUser.id;
                      const productId = item.productId;

                      if (isSubscribed(userId, productId)) {
                        showAlertError(
                          "Ya estás suscrito",
                          "No puedes suscribirte nuevamente a este plan."
                        );
                      } else {
                        handleSubscribe({
                          userId,
                          userAsociateId: item?.associateUserId || "",
                          serviceId: productId,
                          serviceName: item.name,
                          description: item.description,
                          planId: item.plan?.id,
                          categoryId: item.category?.id,
                          categoryName: item.category?.name,
                        });
                      }
                    } else {
                      console.error("Usuario no autenticado");
                    }
                  }}
                >
                  Suscribirse
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TrainingTablePlan;
