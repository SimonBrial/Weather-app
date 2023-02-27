import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const BtnCelcius = ({ colorState, action }) => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    function celcius (kelvin) {
        const tempCelcius = kelvin - 273.15;
        return tempCelcius;
    };

    const handleTempCelcius = (action) => {
        if (currentUbication.data.main.temp == null && action !== false) {
            //console.log('Esta vacio el estado de la APP')
        } else {
            const tempCelcius = celcius(currentUbication.data.main.temp);
            //console.log(tempCelcius)
            return tempCelcius;
        }
    };

    return (
        <>
            <button className={
                (action)
                    ? colorState.tempAvailable
                    : colorState.tempHidden
            } 
            onClick={
                handleTempCelcius
            }>℃</button>
        </>
    )
}

export { BtnCelcius }