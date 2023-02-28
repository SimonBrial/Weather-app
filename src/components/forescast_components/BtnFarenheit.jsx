import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const BtnFarenheit = ({ colorState, action }) => {

    const updateTemperature = useWeatherStore(state => state.updateTemperature);
    const farenheit = useWeatherStore(state => state.farenheit);
    const celcius = useWeatherStore(state => state.celcius);

    const handleTemp = () => {
        console.log(farenheit)
        return updateTemperature(celcius, farenheit)
    };

    return (
        <>
            <button className={
                (farenheit)
                    ? colorState.tempAvailable
                    : colorState.tempHidden
            }
                onClick={handleTemp}>°F</button>
        </>
    )
}

export { BtnFarenheit } 