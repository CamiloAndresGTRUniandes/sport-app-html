import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecommendation = () => {
  const [recommendation, setRecommendation] = useState([]);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(true);

  const [selectedId, setSelectedId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datarecommendation = await axios.get('http://localhost:3003/ejercicios'); 
        setRecommendation(datarecommendation.data);
        setLoading(false);
      } catch (error) {
        console.log('Error al cargar los datos:', error);
        setLoading(false);
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
    loading,
    setRecommendation,
    setLoading,
    selectedId, setSelectedId,handleCardClick
  };
};

export default useRecommendation;
