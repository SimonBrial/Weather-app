import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const BtnCelcius = ({ colorState, action }) => {

    const updateTemperature = useWeatherStore(state => state.updateTemperature);
    const celcius = useWeatherStore(state => state.celcius);
    const farenheit = useWeatherStore(state => state.farenheit);

    const handleTemp = () => {
        //console.log(celcius)
        return updateTemperature(celcius, farenheit)
    };

    return (
        <>
            <button className={
                (celcius)
                    ? colorState.tempAvailable
                    : colorState.tempHidden
            }
                onClick={
                    handleTemp
                }>℃</button>
        </>
    )
}

export { BtnCelcius }