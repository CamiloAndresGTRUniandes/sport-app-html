import { useState, useEffect } from "react";
import axios from "axios";
import { GetUserInfo } from "../../Utils";
import { useEditUserProfile } from "../../User/Hooks/useEditUserProfile";


const useRecommendation = () => {
  const urlAPI = process.env.REACT_APP_API_URL;

  const { getToken, getUser } = GetUserInfo();
  const token = getToken();
  
  console.log("Token:", token);


  const [recommendation, setRecommendation] = useState([]);
  const [hover, setHover] = useState(0);
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

  // Uso de useEffect para obtener recomendaciones al cargar el componente.
  useEffect(() => {
    const fetchData = async () => {
      const user = getUser();
      try {
        const response = await axios.post(
          `${urlAPI}/api/V1/UserRecommendation/ByUser`,
          {
            "userId": user.id,
            "typeOfRecommendation": "0037fc1b-5414-449c-8f68-ff9d7365f1a0"
          },
          tokenPayload
        );
        setRecommendation(response.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]); // Dependencia para re-ejecutar si el token cambia.

  // Función para manejar clics en las tarjetas.
  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  const totalPages = Math.ceil(recommendation.length / 3);

  // Retornar objetos y funciones útiles para el componente.
  return {
    recommendation: recommendation.slice(hover * 3, hover * 3 + 3),
    hover,
    setHover,
    totalPages,
    loading,
    error,
    selectedId,
    setSelectedId,
    handleCardClick,
  };
};

export default useRecommendation;
