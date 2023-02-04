//import apiService from './apiOptions';
import axios from 'axios';

const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';

const WeatherToday = async (city, code) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${VITE_API_KEY}&units=metrics`;
    const response = await axios.get(URL);
    return response
};

export default WeatherToday