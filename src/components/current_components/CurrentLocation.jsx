import { React, useState, useContext, useEffect } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const CurrentLocation = () => {
    const prueba = useWeatherStore(state => state.prueba)

    return (
        <button className='w-10 h-10 rounded-full bg-BtnSearch' onClick={prueba}>
            <span className="my-1.5 material-symbols-outlined text-TemperatureFontcolorDesabled">my_location</span>
        </button>
    )
};

export { CurrentLocation }