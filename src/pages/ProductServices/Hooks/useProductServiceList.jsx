import { useState, useRef, useEffect } from "react";
import { Alerts } from "../../Utils";
import axios from "axios";

export const useProductServiceList = () => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [initialData, setInitialData] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    
    const GetDataAsync = async () => {
        try {
            const requestData = {
                user : '3bfc0e87-e3bb-46b4-9f0a-b0d264fcd6b6'
            }
            const productServices$ = await axios.post(
                `${urlAPI}/api/v1/productService/getFilteredList`, requestData
            );
            const modifiedData = await Promise.all(productServices$.data.map( async (item) => {
                const planComplete = await axios.get(`${urlAPI}/api/v1/productService/Plan/${item.planId}`);
                const serviceTypeComplete = await axios.get(`${urlAPI}/api/v1/productService/ServiceType/${item.serviceTypeId}`);
                return{
                    productId : item.productId,
                    name : item.name,
                    price : item.price,
                    plan : planComplete.data.name,
                    serviceType : serviceTypeComplete.data.name
                };
            }));
            setInitialData(modifiedData);
            setProductsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
       

    };
    return {
        initialData,
        GetDataAsync,
        productsLoading
    };
};