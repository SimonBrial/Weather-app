import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';
import { visibilityValue } from '../../assets/utils';

const Visibility = () => {
    // Default: meter, Metric: Celsius, Imperial: Fahrenheit. 

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const visib =  visibilityValue(currentUbication.data.visibility);

    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center justify-center w-80 h-40 mr-5 mt-5' >
            <h1 className='text-TemperatureFontcolorDesabled mt-5 mb-2 text-xl'>Visibility</h1>
            <div className='flex flex-row mb-2 items-center'>
                <div className='flex '>
                    <p className='text-TemperatureFontcolorDesabled text-5xl'>{visib}</p>
                </div>
                <p className='text-TemperatureFontcolorDesabled text-3xl ml-1'>miles</p>
            </div>
        </div>
    )
};

export { Visibility }