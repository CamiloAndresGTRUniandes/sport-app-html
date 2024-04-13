import { useState, useEffect } from "react";
import axios from "axios";
const urlAPI = process.env.REACT_APP_API_URL_SERVICE;


const useService = () => {
    const [services, setService] = useState([]);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataservices = await axios.get(`${urlAPI}/api/v1/productService/getActiveServiceTypes`);

                setService(dataservices.data);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []);


  return {
    services,
    hover,
    setHover,
    setService

  };
};

export default useService;
