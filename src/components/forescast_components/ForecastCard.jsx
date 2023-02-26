import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';
import { ForecastTemp } from './../index';

const ForecastCard = ({ date, maxTemp, minTemp }) => {
    //const { farenheit } = useWeatherStore(state => state.farenheit)


    return (
        <div className='m-2 py-4 px-2 bg-BackgroundCards'>
            <h1 className='text-TemperatureFontcolorDesabled text-lg text-center font-medium'>{date}</h1>
            <img src='../../src/img/LightRain.png' className='w-20 h-20 m-auto' />
            <div className='flex flex-row pt-2'>
                <ForecastTemp max={maxTemp} min={minTemp}/>
            </div>
        </div>
    )
};

export { ForecastCard }