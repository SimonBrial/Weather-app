import React from 'react';
import { WindStatus, Humidity, Visibility, AirPressure } from './index';
import WeatherToday from '../api/apiRequest';
import { BtnWeather } from './BtnWeather';
import axios from 'axios';


export const Container = () => {
    const handleWeather = async () => {
        const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${'tocuyito'},${'ve'}&appid=${VITE_API_KEY}&units=metrics`;
        const response = await axios.get(URL);
        return console.log(response.data)
        //WeatherToday('tocuyito', 've')

    }

    return (
        <div>
            <h1>From Container component</h1>
            <WindStatus />
            <Humidity />
            <Visibility />
            <AirPressure />
            <button onClick={handleWeather}>Solicita el clima</button>
        </div>
    )
};