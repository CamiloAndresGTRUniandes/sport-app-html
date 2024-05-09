import { useState, useRef } from "react";
import axios from "axios";
import { Alerts, GetUserInfo } from "../../../Utils";

export const useTrainingTablePlan = (goalId) => {
  const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
  const urlAPI2 = process.env.REACT_APP_API_URL;
  const { getToken } = GetUserInfo();
  const token = useRef(getToken());

  const [initialData, setInitialData] = useState([]);
  const [goal, setGoal] = useState(null);
  const [trainingLoading, setTrainingsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { showAlertSuccess, showAlertError } = Alerts();
  const [subscribedUsers, setSubscribedUsers] = useState([]);

  const GetDataAsync = async () => {
    try {
      setTrainingsLoading(true);
      setError(null);

      const requestData = {
        serviceTypes: ["3040214a-a77d-4549-8f67-6b51f7755a3e"],
      };

      const productServicesResponse = await axios.post(
        `${urlAPI}/api/v1/productService/getFilteredList`,
        requestData
      );

      const goalResponse = await axios.get(`${urlAPI}/api/v1/goal/${goalId}`);

      setInitialData(productServicesResponse.data);
      setGoal(goalResponse.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
      setError("Ocurrió un error al cargar datos.");
    } finally {
      setTrainingsLoading(false);
    }
  };

  const handleSubscribe = async (item) => {
    try {
      // Verificar si el usuario está suscrito al mismo plan
      const alreadySubscribed = subscribedUsers.some(
        (user) => user.userId === item.userId && user.serviceId === item.serviceId
      );

      if (alreadySubscribed) {
        showAlertError(
          "Ya estás suscrito",
          "No puedes suscribirte nuevamente a este plan."
        );
        return; // No procedas con la suscripción
      }

      const response = await axios.post(
        `${urlAPI2}/api/V1/EnrollServiceUser`,
        item,
        {
          headers: { Authorization: `Bearer ${token.current}` },
        }
      );

      // Agregar al usuario a la lista de suscritos, vinculando el plan y el usuario
      setSubscribedUsers((prev) => [...prev, { userId: item.userId, serviceId: item.serviceId }]);

      showAlertSuccess(
        "Suscripción exitosa",
        "Te has suscrito correctamente."
      );

    } catch (error) {
      console.error("Error al suscribirse:", error);
      showAlertError("Ups :(", "No se pudo suscribir. Inténtalo de nuevo.");
    }
  };

  return {
    initialData,
    goal,
    GetDataAsync,
    trainingLoading,
    error,
    handleSubscribe,
    subscribedUsers,
  };
};

export default useTrainingTablePlan;
