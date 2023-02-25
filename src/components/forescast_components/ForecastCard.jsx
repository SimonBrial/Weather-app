import React from 'react';
import { Today } from '../current_components/Today';

const ForecastCard = ({ date }) => {
    return (
        <div className='m-2 p-2 bg-BackgroundCards'>
            <h1 className='text-TemperatureFontcolorDesabled text-lg text-center font-medium'>{date}</h1>
            <img src='../../src/img/LightRain.png' className='w-20 h-20 ml-2 mb-4' />
            <div className='flex flex-row pt-2'>
                <div className='flex flex-row justify-center mx-1 px-1'>
                    <span className='text-xl text-TemperatureFontcolorDesabled'>15</span>
                    <span className='ml-1 text-lg flex items-center text-TemperatureFontcolorDesabled'>℃</span>
                </div>
                <div className='flex flex-row justify-center mx-1 px-1'>
                    <span className='text-xl text-Temperature'>11</span>
                    <span className='ml-1 text-lg flex items-center text-Temperature'>℃</span>
                </div>
            </div>
        </div>
    )
};

export { ForecastCard }