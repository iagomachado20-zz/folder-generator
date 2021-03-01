import axios from 'axios';

axios.defaults.timeout = 3000;

const BASE_URL = 'http://127.0.0.1:5000';
export const BASE_SERVER = 'https://allmidias.com.br/autoencarte/';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

export default api;