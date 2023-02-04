import axios from 'axios';

const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = `https://api.openweathermap.org`;
const BASE_URL = CORS_ANYWHERE_URL + API_URL;

const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});

export default apiService;

//'Access-Control-Allow-Origin': '*', withCredentials: false,

// https://api.openweathermap.org/data/2.5/weather?q=${city, code},ve&appid=${VITE_API_KEY}&units=metrics