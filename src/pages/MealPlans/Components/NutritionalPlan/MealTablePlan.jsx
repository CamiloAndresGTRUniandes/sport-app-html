import React, { useEffect } from "react";
import { Table, Alert, Button } from "react-bootstrap";
import { useMealTablePlan } from "../../Hooks/NutritionalPlan/useMealTablePlan";
import { useNavigate } from "react-router-dom";
import { SpinnerSportApp } from "../../../Utils/SpinnerSportApp";
import { Alerts } from "../../../Utils";

const { showAlertError } = Alerts();

// istanbul ignore next
const MealTablePlan = () => {
  const {
    initialData,
    GetDataAsync,
    mealLoading,
    error,
    handleSubscribe,
    subscribedUsers,
  } = useMealTablePlan();

  const navigate = useNavigate();
// istanbul ignore next
  useEffect(() => {
    GetDataAsync();
  }, []);

  if (mealLoading) {
    return <SpinnerSportApp />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }
// istanbul ignore next
  const currentUserStr = sessionStorage.getItem("userLogin");
  let currentUser = null;

  if (currentUserStr) {
    currentUser = JSON.parse(currentUserStr);
  }
// istanbul ignore next
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
          <th>Objetivo</th>
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
                onClick={() => navigate(`/DetailMealTable/${item.productId}`)}
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

export default MealTablePlan;
