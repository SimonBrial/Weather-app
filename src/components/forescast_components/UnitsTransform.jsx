import React from 'react';
import { BtnCelcius, BtnFarenheit } from '../index';
import { useWeatherStore } from '../../store/weatherStore';


const UnitsTransform = () => {
    const celcius = useWeatherStore(state => state.celcius);
    const farenheit = useWeatherStore(state => state.farenheit);

    const colorState = {
        tempAvailable: 'w-10 h-10 rounded-full mx-1 bg-TemperatureButtonsAvalible  text-TemperatureFontcolorAvailable font-bold',
        tempHidden: 'w-10 h-10 rounded-full mx-1 bg-TemperatureButtonsDesabled text-TemperatureFontcolorDesabled font-bold'
    };

    return (
        <>
            <BtnCelcius colorState={colorState} action={celcius} />
            <BtnFarenheit colorState={colorState} action={farenheit}/>
        </>
    )
};

export { UnitsTransform }