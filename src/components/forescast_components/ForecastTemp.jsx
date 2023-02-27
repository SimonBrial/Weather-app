import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const ForecastTemp = ({ max, min }) => {

    const farenheit = useWeatherStore(state => state.farenheit);
    const currentForecast = useWeatherStore(state => state.currentForecast);

    const convertion = (temp) => {
        // La variable "temp" esta en KELVIN, asi que no hay problemas por la conversion
        if (farenheit) { // farenheit = false
            const celciusTemp = temp - 273.15;
            return celciusTemp.toFixed(1);
        } else { // farenheit = true
            const farenheitTemp = (temp - 273.15) * (9 / 5) + 32;
            return farenheitTemp.toFixed(1);
        }
    };

    return (
        <>
            <div className='flex flex-row justify-center mx-1 '>
                    {
                        (currentForecast !== null)
                        ? <span className='text-lg text-TemperatureFontcolorDesabled'>{convertion(max)}</span>
                        : <span className='text-lg text-TemperatureFontcolorDesabled'>15</span>
                    }
                <span className='ml-1 text-md flex items-center text-TemperatureFontcolorDesabled'>
                    {
                        (farenheit)
                            ? <>℃</>
                            : <>°F</>
                    }
                </span>
            </div>
            <div className='flex flex-row justify-center mx-1 px-1'>
                {
                    (currentForecast !== null)
                    ? <span className='text-lg text-Temperature'>{convertion(min)}</span>
                    : <span className='text-lg text-Temperature'>15</span>
                }
                <span className='ml-1 text-md flex items-center text-Temperature'>
                    {
                        (farenheit)
                            ? <>℃</>
                            : <>°F</>
                    }
                </span>
            </div>
        </>
    )
}

export { ForecastTemp }