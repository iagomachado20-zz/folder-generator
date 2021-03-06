
const keyAuth = 'encart_auth';

export const clearStorage = () => {
    localStorage.clear();
};

export const setToken = (token) => {
    if (token) {
        localStorage.setItem(keyAuth, token);
    } 
};

export const getToken = () => {
   return localStorage.getItem(keyAuth);
}