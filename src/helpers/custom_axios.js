import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
});
  

