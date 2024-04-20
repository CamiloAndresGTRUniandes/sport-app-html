import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../../../elements/PageTitle';
import { IMAGES } from '../../../constants/theme';
import axios from 'axios';

// Custom hook para obtener los detalles de la recomendación
const useRecommendationDetail = (id) => {
  const [recommendationDetail, setRecommendationDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3003/ejercicios/${id}`);
        setRecommendationDetail(data);
        setLoading(false);
      } catch (error) {
        console.log('Error al cargar los datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { recommendationDetail, loading };
};


export default useRecommendationDetail;