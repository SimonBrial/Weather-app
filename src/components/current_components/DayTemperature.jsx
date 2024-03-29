import React, { useState, useEffect } from 'react'
import { useWeatherStore } from '../../store/weatherStore';
import { convertionCelcius, convertionFarenheit } from '../../assets/utils';

const DayTemperature = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);
    const celcius = useWeatherStore(state => state.celcius);

    const kelvin = currentUbication.data.main.temp;

    const temp = () => {
        if (celcius) {
            return convertionCelcius(kelvin)
        } else {
            return convertionFarenheit(kelvin)
        }
    };

    return (
        <div className='-mt-20 flex flex-row justify-center'>
            <span className='text-TempFont text-TemperatureFontcolorDesabled'>{temp()}</span>
            <span className='ml-3 text-5xl flex items-center text-Temperature'>
                {
                    (celcius)
                        ? <>℃</>
                        : <>°F</>
                }
            </span>
        </div>
    )
};

export { DayTemperature }