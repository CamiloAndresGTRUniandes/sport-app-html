import axios from "axios";

export const   ServiceApi = axios.create({
    baseURL:'https://localhost:49157/api/v1/productService/getActiveServiceTypes'
});



