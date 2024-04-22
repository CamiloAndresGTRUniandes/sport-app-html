import { useState, useEffect } from "react";
import axios from "axios";

export const useMealTablePlan = (goalId) => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [initialData, setInitialData] = useState([]);
    const [goal, setGoal] = useState(null); // Para un solo objetivo
    const [mealLoading, setMealsLoading] = useState(true);
    const [error, setError] = useState(null);

    const GetDataAsync = async () => {
        try {
            setMealsLoading(true);
            setError(null);

            const currentUser = JSON.parse(sessionStorage.getItem("userLogin"));
            const requestData = {
                user: currentUser.id,
                serviceTypes: ["01B50F0D-3226-4DF2-B912-4DA4B37D9BD9"],
            };

            // Solicitud POST para obtener servicios
            const productServicesResponse = await axios.post(
                `${urlAPI}/api/v1/productService/getFilteredList`,
                requestData
            );

            // Solicitud GET para obtener el objetivo
            const goalResponse = await axios.get(`${urlAPI}/api/v1/goal/${goalId}`);

            setInitialData(productServicesResponse.data);
            setGoal(goalResponse.data); // Para un solo objetivo
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Ocurrió un error al cargar datos.");
        } finally {
            setMealsLoading(false);
        }
    };

    return {
        initialData,
        goal, // Devuelve un solo objetivo
        GetDataAsync,
        mealLoading,
        error,
    };
};
