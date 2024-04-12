import { useEffect, useState } from "react";
import axios from "axios";


export const useProducts = () => {
    const productsApi = axios.create({
      baseURL:'http://localhost:3000/productsService'
    });
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const productsData = await productsApi.get();
  
          setProducts(productsData.data);
        } catch (error) {
          console.error('Error al cargar los datos:', error);
        }
      };
  
      fetchData();
    },[]);

    return { products };
  }