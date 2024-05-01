import { useState, useRef, useEffect } from "react";
import { Alerts } from "../../Utils";
import axios from "axios";

export const usePricingCard = () => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [pricingBlog, setPricingBlog] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const { showAlertSuccess, showAlertError } = Alerts();

    const GetDataAsync = async () => {
        try {
            const currentUser = JSON.parse(sessionStorage.getItem("userLogin"));

            const plans$ = await axios.get(
                `${urlAPI}/api/v1/productService/Plan`
            );

            setPricingBlog(plans$.data);
            setProductsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return {
        pricingBlog,
        GetDataAsync,
        productsLoading
    };
};