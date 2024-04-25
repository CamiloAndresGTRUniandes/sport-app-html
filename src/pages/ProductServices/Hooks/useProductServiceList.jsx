import { useState, useRef, useEffect } from "react";
import { Alerts } from "../../Utils";
import axios from "axios";

export const useProductServiceList = () => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [initialData, setInitialData] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const { showAlertSuccess, showAlertError } = Alerts();
    const GuidEmpty = "00000000-0000-0000-0000-000000000000";

    const GetDataAsync = async () => {
        try {
            const currentUser = JSON.parse(sessionStorage.getItem("userLogin"));
            const requestData = {
                user: currentUser.id
            }
            const productServices$ = await axios.post(
                `${urlAPI}/api/v1/productService/getFilteredList`, requestData
            );

            setInitialData(productServices$.data);
            setProductsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteProductService = async (id) => {
        if (id != null && id != GuidEmpty && id != undefined) {
            try {
                setProductsLoading(true);
                const response = await axios.put(
                    `${urlAPI}/api/v1/productService/${id}`,
                    {}
                );

                showAlertSuccess(
                    "Felicitaciones :)",
                    `El producto o servicio ha sido eliminado.`
                );
                setInitialData(initialData.filter(x => x.productId != id));
                setProductsLoading(false);
            } catch (error) {
                showAlertError(
                    "Ups, lo sentimos :(",
                    `El producto no se ha eliminado.`
                );
                console.error("delete product error", error);
                setProductsLoading(false);
            }
        }
    };
    return {
        initialData,
        GetDataAsync,
        productsLoading,
        deleteProductService
    };
};