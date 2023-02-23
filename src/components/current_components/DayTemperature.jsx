import React from 'react'
import { useWeatherStore } from '../../store/weatherStore';

const DayTemperature = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const tempGrados = () => {
        if (currentUbication == null) {
            console.log('Esta vacio el estado --- From: <DayTemperature /> component')
        } else {
            const kelvin = currentUbication.data.main.temp;
            console.log(kelvin)
            const celcius = kelvin - 273.15;
            console.log(celcius)
            return celcius.toFixed(2);
        }
    };
    //

    //

    return (
        <div className='mt-10 flex flex-row justify-center'>
            {/* <span className='text-9xl items-start text-TemperatureFontcolorDesabled'>1</span> */}
            {
                (currentUbication == null)
                ? <span className='text-TempFont text-TemperatureFontcolorDesabled'>15</span>
                : <span className='text-TempFont text-TemperatureFontcolorDesabled'>{tempGrados()}</span>
            }
            <span className='ml-3 text-5xl flex items-center text-Temperature'>℃</span>
        </div>
    )
};

export { DayTemperature }