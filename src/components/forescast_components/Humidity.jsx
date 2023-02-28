import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const Humidity = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const [humid, setHumid] = useState()

    useEffect(() => {
        setHumid(currentUbication.data.main.humidity)
    }, [])

    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center w-80 h-52 mr-5' >
            <h1 className='text-TemperatureFontcolorDesabled mt-4 mb-2 text-xl'>Humidity</h1>
            <div className='flex flex-row mb-2 items-center'>
                <div className='flex '>
                    <p className='text-TemperatureFontcolorDesabled text-5xl'>{humid}</p>
                </div>
                <p className='text-TemperatureFontcolorDesabled text-3xl ml-1'>%</p>
            </div>
            <div className='w-4/6'>
                <div className='flex justify-between'>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>0</span>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>50</span>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>100</span>
                </div>
                <div className='relative' id='humidity'>
                    <span className='px-24 h-3 bg-white absolute index-0 rounded-xl addHumidity'></span>
                    <span className='h-3 bg-amber-300 absolute index-10 rounded-xl' style={{ padding: ` 0 ${humid}px` }}></span>
                </div>
                <div className='text-TemperatureFontcolorDesabled text-end mt-2 mr-2'>
                    <span>%</span>
                </div>
            </div>
        </div>
    )
};

export { Humidity }