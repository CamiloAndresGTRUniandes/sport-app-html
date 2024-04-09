import axios from "axios";

export const formularioApi = axios.create({
    baseURL:'http://localhost:3002'
});
