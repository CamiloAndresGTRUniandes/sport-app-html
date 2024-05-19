import { useState, useRef, useEffect } from "react";
import { Alerts } from "../../Utils";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const useSubscriptionTable = () => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const [plan, setPlan] = useState({});
    const [productsLoading, setProductsLoading] = useState(true);
    const { showAlertSuccess, showAlertError } = Alerts();
    const currentUser = JSON.parse(sessionStorage.getItem("userLogin"));
    const navigation = useNavigate();
    const GuidEmpty = "00000000-0000-0000-0000-000000000000";
    const GetDataAsync = async (planId) => {
        try {
            const plan$ = await axios.get(
                `${urlAPI}/api/v1/productService/Plan/${planId.planId}`
            );

            setPlan(plan$.data);
            setProductsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };
    const pagar = async (planComing) => {
        if (!productsLoading) {
            if (planComing != "" && planComing != undefined && plan.id != GuidEmpty) {
                try {

                    let date = new Date(Date.now());
                    let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
                        .toISOString();
                    const requestData = {
                        startDate: dateString,
                        user: currentUser.id,
                        planId: plan.id
                    };
                    await axios.post(
                        `${urlAPI}/api/v1/subscription`, requestData
                    );
                    showAlertSuccess(
                        "Felicitaciones :)",
                        `Estas a un paso de suscribirte al plan ${plan.name} por 30 dias,  Seras redirigido al enlace de pago a continuacion.`
                    );
                    let enlace = enlacePago(planComing.name);
                    if (enlace) {
                        setTimeout(() => {
                            window.location.href = enlace;
                        }, 5000);
                    }
                } catch (error) {
                    showAlertError(
                        "Ups, lo sentimos :(",
                        `La suscripcion ha fallado.`
                    );
                    console.error('Error fetching data:', error);
                }
            }
        }

    };
    const enlacePago = (plan) => {
        switch (plan) {
            case "Basic":
                return 0;
            case "Intermediate":
                return "https://buy.stripe.com/test_14keVjf9a5sc0sE6oo";
            case "Premium":
                return "https://buy.stripe.com/test_dR67sR9OQg6Q1wIcMN";

        }
    };
    return {
        plan,
        GetDataAsync,
        productsLoading,
        formatCurrency,
        pagar
    };
};
