import { useEffect, useState } from "react";
import axios from "axios";

export const useMealTable = () => {
    const mealApi = axios.create({
      baseURL:'http://localhost:3000/planes_alimenticios'
    });
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const mealsData = await mealApi.get();
          setMeals(mealsData.data);
        } catch (error) {
          console.error('Error al cargar los datos:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [mealApi]); // Agregar mealApi como dependencia
  
    return { meals, loading };
};
