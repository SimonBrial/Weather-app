import React from 'react'
import { useState } from 'react';

export const CurrentLocation = () => {
    const [location, setLocation] = useState({});

    const handleLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(position.coords)
            })
        }
        return location
    };

    return (
        <button onClick={handleLocation} className='w-10 h-10 rounded-full bg-BtnSearch'>
            <span className="my-1.5 material-symbols-outlined text-TemperatureFontcolorDesabled">my_location</span>
        </button>
    )
};