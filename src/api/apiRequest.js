//import apiService from './apiOptions';
import axios from 'axios';

const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';

// Request by City and Country Code
const WeatherByCityAndCode = async (city, code) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${VITE_API_KEY}&units=metrics`;
    const response = await axios.get(URL);
    return response
};

// Request by latitude and longitude
const WeatherByLatAndLon = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current&appid=${VITE_API_KEY}`;
    const response = await axios.get(URL);
    return response;
};


export default {
    WeatherByCityAndCode,
    WeatherByLatAndLon
}