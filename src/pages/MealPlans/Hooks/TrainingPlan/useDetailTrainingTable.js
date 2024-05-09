import { useState, useCallback } from "react";
import axios from "axios";

export const useDetailTrainingTable = (id) => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [initialData, setInitialData] = useState(null);
    const [trainingLoading, setTrainingLoading] = useState(false);
    const [error, setError] = useState(null);

    const GetDataAsync = useCallback(async () => {
        if (!id) {
            console.error("ID is undefined");
            return; // No intentar la llamada si `id` es indefinido
        }

        setTrainingLoading(true); // Indicar que está cargando

        try {
            const response = await axios.get(`${urlAPI}/api/v1/productService/${id}`); // Llamada a la API
            console.log("Data from API:", response.data); // Comprobar datos obtenidos
            setInitialData(response.data); // Establecer datos obtenidos
        } catch (err) {
            console.error("Error fetching data:", err); // Mostrar error para depuración
            setError("Ocurrió un error al cargar datos."); // Mostrar mensaje de error amigable
        } finally {
            setTrainingLoading(false); // Indicar que terminó de cargar
        }
    }, [id, urlAPI]); // Dependencias correctas para `useCallback`

    return {
        initialData,
        GetDataAsync,
        trainingLoading,
        error,
    };
};

export default useDetailTrainingTable;
