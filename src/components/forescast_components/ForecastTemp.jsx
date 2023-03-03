import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';
import { convertionCelcius, convertionFarenheit } from '../../assets/utils';

const ForecastTemp = ({ max, min }) => {

    const celcius = useWeatherStore(state => state.celcius);

    const convertion = (kelvin) => {
        if (celcius) { // celcius = true
            const celciusTemp = convertionCelcius(kelvin);
            return celciusTemp;
        } else { // celcius = false
            const farenheitTemp = convertionFarenheit(kelvin);
            return farenheitTemp;
        }
    };



    return (
        <>
            <div className='flex flex-row justify-center mx-1 '>
                <span className='text-md text-TemperatureFontcolorDesabled'>{convertion(max)}</span>
                <span className='ml-1 text-md flex items-center text-TemperatureFontcolorDesabled'>
                    {
                        (celcius)
                            ? <>℃</>
                            : <>°F</>
                    }
                </span>
            </div>
            <div className='flex flex-row justify-center mx-1 px-1'>
                <span className='text-md text-Temperature'>{convertion(min)}</span>
                <span className='ml-1 text-md flex items-center text-Temperature'>
                    {
                        (celcius)
                            ? <>℃</>
                            : <>°F</>
                    }
                </span>
            </div>
        </>
    )
}

export { ForecastTemp }