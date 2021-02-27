import axios from 'axios';

const BASE_URL = 'https://all-midias-encarte.herokuapp.com/'

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

export default api;