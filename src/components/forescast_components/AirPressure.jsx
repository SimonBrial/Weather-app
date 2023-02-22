import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const AirPressure = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const pressure = () => {
        const value = (currentUbication.data.main.pressure)/1000;
        return value.toFixed(2);
    }

    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center justify-center w-80 h-50 mt-5 mr-5' >
        <h1 className='text-TemperatureFontcolorDesabled mt-4 mb-2 text-xl'>Air Pressure</h1>
        <div className='flex flex-row mb-2 items-center'>
            <div className='flex '>
                {/* <p className='text-TemperatureFontcolorDesabled text-5xl'>99</p> */}
                {
                    (currentUbication == null)
                    ?   <p className='text-TemperatureFontcolorDesabled text-5xl -mt-2'>2.7</p>
                    : <p className='text-TemperatureFontcolorDesabled text-5xl -mt-2'>{ pressure() }</p>
                }
            </div>
            <p className='text-TemperatureFontcolorDesabled text-3xl ml-1'>bar</p>
        </div>
    </div>
    )
};

export { AirPressure }