import { useState, useEffect } from "react";
import {ServiceApi } from "../Api/ServiceApi";

const useService = () => {
    const [services, setService] = useState([]);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataservices = await ServiceApi.get();

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
