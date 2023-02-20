import { React, useState, useEffect } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const CurrentLocation = () => {
    const currentLocationData = useWeatherStore(state => state.currentLocationData);
    const currentUbication = useWeatherStore(state => state.currentUbication);
    
    return (
        <button className='w-10 h-10 rounded-full bg-BtnSearch' 
        onClick={() => {
            currentLocationData()
            console.log(currentUbication)
        }}>
            <span className="my-1.5 material-symbols-outlined text-TemperatureFontcolorDesabled">my_location</span>
        </button>
    )
};

export { CurrentLocation }