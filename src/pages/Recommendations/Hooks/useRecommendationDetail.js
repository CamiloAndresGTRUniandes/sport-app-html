import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecommendationDetail = () => {
    const [recommendationdetail, setRecommendationDetail] = useState([]);
    const [hover, setHover] = useState(0);
    const [selectedTitle, setSelectedTitle] = useState(''); // Nuevo estado para almacenar el título de la tarjeta seleccionada

    useEffect(() => {
        const fetchData = async () => {
            try {
                const datarecommendationdetail = await axios.get('http://localhost:3003/ejercicios');
                setRecommendationDetail(datarecommendationdetail.data);
            } catch (error) {
                console.log('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []);

    return {
        recommendationdetail,
        hover,
        setHover,
        selectedTitle, // Retornar el título de la tarjeta seleccionada
        setSelectedTitle, // Retornar la función setSelectedTitle
    };
};

export default useRecommendationDetail;