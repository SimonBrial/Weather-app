// ESTE ES UN COMPONENTE PROVISIONAL, SOLO PARA HACER UNAS PRUEBAS

import React from 'react'
import axios from 'axios';
//import WeatherToday from '../api/apiRequest';

/* const city = 'tocuyito';
const code = 've'; */

export const BtnWeather = () => {
    /* const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';
    const handleWeather = async (city, code) => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${VITE_API_KEY}&units=metrics`;
        const response = await axios.get(URL);
        return console.log(response.data);
    }; */

    return (
        <button onClick={() => WeatherToday('tocuyito', 've')}>
            Realiza tu peticion del clima
        </button>
    )
};