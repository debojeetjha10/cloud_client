import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://127.0.0.1:3000',
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
});
  

