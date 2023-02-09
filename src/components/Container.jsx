import React from 'react';
import { WindStatus, Humidity, Visibility, AirPressure } from './index';


export const Container = () => {
    /* const handleWeather = async () => {
        const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${'tocuyito'},${'ve'}&appid=${VITE_API_KEY}&units=metrics`;
        const response = await axios.get(URL);
        return console.log(response.data.coord)
        //WeatherToday('tocuyito', 've')

    } */

    return (
        <div className='flex flex-col'>
            <h1 className='text-TemperatureFontcolorDesabled text-2xl pb-2 mx-16 flex justify-self-start'>Today's Highlights</h1>
            <div className='flex flex-row flex-wrap justify-center pt-2'>
                <WindStatus />
                <Humidity />
                <Visibility />
                <AirPressure />
            </div>
        </div>
    )
};