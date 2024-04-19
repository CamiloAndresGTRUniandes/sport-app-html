import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecommendation = () => {
  const [recommendation, setRecommendation] = useState([]);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datarecommendation = await axios.get('http://localhost:3003/ejercicios');
        setRecommendation(datarecommendation.data);
      } catch (error) {
        console.log('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(recommendation.length / 3);

  return {
    recommendation: recommendation.slice(hover * 3, hover * 3 + 3),
    hover,
    setHover,
    totalPages,
  };
};

export default useRecommendation;
