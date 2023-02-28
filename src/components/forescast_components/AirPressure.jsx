import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';
import { pressure } from '../../assets/utils'

const AirPressure = () => {


    const currentUbication = useWeatherStore(state => state.currentUbication);

    const [psiValue, setPsiValue] = useState()

    useEffect(() => {
        const data = pressure(currentUbication.data.main.pressure)
        setPsiValue(data)
    }, []);

    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center justify-center w-80 h-50 mt-5 mr-5' >
            <h1 className='text-TemperatureFontcolorDesabled mt-4 mb-2 text-xl'>Air Pressure</h1>
            <div className='flex flex-row mb-2 items-center'>
                <div className='flex '>
                    <p className='text-TemperatureFontcolorDesabled text-5xl -mt-2'>{psiValue}</p>
                </div>
                <p className='text-TemperatureFontcolorDesabled text-3xl ml-1'>Psi</p>
            </div>
        </div>
    )
};

export { AirPressure }