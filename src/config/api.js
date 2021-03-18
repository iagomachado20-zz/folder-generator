import axios from 'axios';
import { getToken } from './auth';

axios.defaults.timeout = 3000;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// axios.defaults.headers.authorization = `Bearer ${localStorage.getItem('encart_auth')}`; 

const BASE_URL = 'http://emporiorosadas.com.br';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

export default api;