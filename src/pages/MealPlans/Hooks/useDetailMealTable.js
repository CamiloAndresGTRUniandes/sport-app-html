import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useDetailMealTable = (id) => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [initialData, setInitialData] = useState([]);
    const [mealLoading, setMealsLoading] = useState(true);
    const [error, setError] = useState(null);

    const GetDataAsync = useCallback(async () => {
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

            setInitialData(productServicesResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Ocurrió un error al cargar datos.");
        } finally {
            setMealsLoading(false);
        }
    }, []); // Uso de useCallback para crear una función memoizada

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.post(`${urlAPI}/api/v1/productService/getFilteredList/${id}`
      );
      setInitialData(data);
    
        } catch (error) {
          console.log('Error al cargar los datos:', error);
          
        }
      };
  
      fetchData();
    }, [id]);

    

    useEffect(() => {
        GetDataAsync();
    }, [GetDataAsync]); // Incluyendo GetDataAsync como dependencia para evitar errores de uso de hooks

    const getPlanById = (productId) => {
      return initialData.find((item) => item.productId === productId);
  };


    return {
        initialData,
        GetDataAsync,
        mealLoading,
        error,
        getPlanById ,
    };
};
