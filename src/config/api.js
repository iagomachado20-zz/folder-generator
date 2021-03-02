import axios from 'axios';

axios.defaults.timeout = 3000;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const BASE_URL = 'https://all-midias-encarte.herokuapp.com/';
export const BASE_SERVER = 'https://allmidias.com.br/autoencarte/';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

export default api;