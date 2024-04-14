import { useState, useRef, useEffect } from "react";
import { Alerts } from "../../Utils";
import axios from "axios";

export const useProductServiceList = () => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [initialData, setInitialData] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);

    const GetDataAsync = async () => {
        try {
            const currentUser = JSON.parse(sessionStorage.getItem("userLogin"));
            const requestData = {
                user: currentUser.id
                user: '3bfc0e87-e3bb-46b4-9f0a-b0d264fcd6b6'
            }
            const productServices$ = await axios.post(
                `${urlAPI}/api/v1/productService/getFilteredList`, requestData
            );

            setInitialData(productServices$.data);
            setProductsLoading(false);
        } catch (error) {
            console.log('Error fetching data:', error);
        }


    };
    return {
        initialData,
        GetDataAsync,
        productsLoading
    };
};