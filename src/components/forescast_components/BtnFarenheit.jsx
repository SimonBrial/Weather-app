import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const BtnFarenheit = ({ colorState, action }) => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const farenheit  = (kelvin) => {
        const tempFarenheit = (kelvin - 273.15) * (9/5) + 32;
        return tempFarenheit;
    };

    const handleTempFarenheit = (action) => {
        if (currentUbication.data.main.temp == null && action == false) {
            console.log('Esta vacio el estado de la APP')
        } else {
            const tempCelcius = farenheit(currentUbication.data.main.temp)
            console.log(tempCelcius)
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
            onClick={handleTempFarenheit}>°F</button>
        </>
    )
}

export { BtnFarenheit } 