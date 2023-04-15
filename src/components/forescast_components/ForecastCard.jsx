import React from 'react';
import { ForecastTemp, WeatherIcon } from '../index';

const ForecastCard = ({ date, maxTemp, minTemp, id }) => {
    //const { farenheit } = useWeatherStore(state => state.farenheit)


return (
        <div className='m-2 py-4 px-2 bg-BackgroundCards'>
            <h1 className='text-TemperatureFontcolorDesabled text-lg text-center font-medium'>{date}</h1>
            <div className='w-16 h-16 m-auto'>
                <WeatherIcon id={id} stylesIcon={'text-white w-16 h-16'}/>
            </div>
            <div className='flex flex-row '>
                <ForecastTemp max={maxTemp} min={minTemp} />
            </div>
        </div>
    )
};

export { ForecastCard }