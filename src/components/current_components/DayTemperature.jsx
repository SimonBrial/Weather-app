import React, { useState, useEffect } from 'react'
import { useWeatherStore } from '../../store/weatherStore';
import { celcius } from '../../assets/utils';

const DayTemperature = () => {

    const [temp, setTemp] = useState(15);

    const currentUbication = useWeatherStore(state => state.currentUbication);
    const kelvin = currentUbication.data.main.temp;

    useEffect(() => {
        setTemp(celcius(kelvin))
    }, [])

    return (
        <div className='mt-10 flex flex-row justify-center'>
            <span className='text-TempFont text-TemperatureFontcolorDesabled'>{temp}</span>
            <span className='ml-3 text-5xl flex items-center text-Temperature'>℃</span>
        </div>
    )
};

export { DayTemperature }