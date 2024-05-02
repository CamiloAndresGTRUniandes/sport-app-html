
import { useState, useCallback } from "react";
import axios from "axios";

export const useDetailMealTable = (id) => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [initialData, setInitialData] = useState(null);
    const [mealLoading, setMealsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Función para obtener datos de la API
    const GetDataAsync = useCallback(async () => {
        if (!id) {
            console.error("ID is undefined");
            return; // No intentar la llamada si el `id` es indefinido
        }

        setMealsLoading(true); // Indicar que está cargando

        try {
            const response = await axios.get(`${urlAPI}/api/v1/productService/${id}`);
          
            setInitialData(response.data); // Actualizar el estado con los datos obtenidos
        } catch (err) {
            console.error("Error fetching data:", err); // Mostrar el error para depuración
            setError("Ocurrió un error al cargar datos."); // Mensaje amigable para el usuario
        } finally {
            setMealsLoading(false); // Termina la carga
        }
    }, [id, urlAPI]); // Dependencias de `useCallback`

    return {
        initialData,
        GetDataAsync,
        mealLoading,
        error,
    }; // Retornar los datos y estados relevantes
};

export default useDetailMealTable;
