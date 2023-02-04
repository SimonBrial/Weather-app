import React from 'react'
import axios from 'axios';
import WeatherToday from '../api/apiRequest';


export const BtnWeather = () => {
    const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';
    const handleWeather = async () => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${'tocuyito'},${'ve'}&appid=${VITE_API_KEY}&units=metrics`;
        const response = await axios.get(URL);
        return console.log(response.data)
        //WeatherToday('tocuyito', 've')
    };

    return (
        <button onClick={handleWeather}>
            Realiza tu peticion del clima
        </button>
    )
};