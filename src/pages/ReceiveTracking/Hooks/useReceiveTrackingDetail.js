import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetUserInfo } from "../../Utils";
import { useEditUserProfile } from "../../User/Hooks/useEditUserProfile";


// Custom hook para obtener los detalles del seguimiento
const useReceiveTrackingDetail= (id) => {
    const urlAPI = process.env.REACT_APP_API_URL;
    const { getToken, getUser } = GetUserInfo();
    const token = getToken();
    const [receiveTrackingDetail, setReceiveTrackingDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [error, setError] = useState(null);
  
    const {
      setUserProfile,
      fetchAllReferencial,
      setUserLoading,
    } = useEditUserProfile();
  
    // Define un objeto con la cabecera de autorización usando el token.
    const tokenPayload = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
  
  
    // Función para obtener el perfil del usuario.
    const GetUserProfile = async () => {
      try {
        const user = getUser();
        const response = await axios.get(
          `${urlAPI}/api/V1/UserSportProfile/${user.id}`,
          tokenPayload
        );
        setUserProfile(response.data);
        await fetchAllReferencial(response.data);
      } catch (error) {
        console.error("Error obteniendo el perfil del usuario:", error);
        setUserLoading(false);
        setError(error.message);
      }
    };
  



  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${urlAPI}/api/V1/UserRecommendation/ById/${id}`,
          tokenPayload
    );
        setReceiveTrackingDetail(data);
        setLoading(false);
      } catch (error) {
        console.log('Error al cargar los datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id,token]);

  return { receiveTrackingDetail, loading,
    
    loading,
    error,
    selectedId,
    setSelectedId,
     };
};




export default useReceiveTrackingDetail;