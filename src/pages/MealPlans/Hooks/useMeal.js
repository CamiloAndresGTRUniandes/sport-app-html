import { useState, useEffect } from "react";
import axios from "axios";
const urlAPI = process.env.REACT_APP_API_URL_SERVICE;


const useMeal = () => {
    const [meal, setMeal] = useState([]);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataMeal = await axios.get("http://localhost:3000/planes_alimenticios");

                setMeal(dataMeal.data);
            } catch (error) {
                console.log('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []);


  return {
    meal,
    hover,
    setHover,
    setMeal,

  };
};

export default useMeal;