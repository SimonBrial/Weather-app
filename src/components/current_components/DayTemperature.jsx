import React from 'react'
import { useWeatherStore } from '../../store/weatherStore';

const DayTemperature = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);
    const farenheit = useWeatherStore(state => state.farenheit);

    const tempGrados = () => {
        if (currentUbication !== null) { 
            const kelvin = currentUbication.data.main.temp;
            const celcius = kelvin - 273.15;
            return celcius.toFixed(2);
        }
    };

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