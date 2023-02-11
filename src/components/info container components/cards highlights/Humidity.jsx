import React from 'react';

export const Humidity = () => {
    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center w-80 h-52 mr-5' >
            <h1 className='text-TemperatureFontcolorDesabled mt-4 mb-2 text-xl'>Humidity</h1>
            <div className='flex flex-row mb-2 items-center'>
                <div className='flex '>
                    <p className='text-TemperatureFontcolorDesabled text-5xl -mt-2'>8</p>
                    <p className='text-TemperatureFontcolorDesabled text-5xl'>4</p>
                </div>
                <p className='text-TemperatureFontcolorDesabled text-3xl ml-1'>%</p>
            </div>
            <div className='w-4/6'>
                <div className='flex justify-between'>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>0</span>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>50</span>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>100</span>
                </div>
                <div className='relative'>
                    <span className='px-24 h-3 bg-white absolute index-0 rounded-xl'></span>
                    <span className='px-[84px] h-3 bg-amber-300 absolute index-10 rounded-xl'></span>
                </div>
                <div className='text-TemperatureFontcolorDesabled text-end mt-2 mr-2'>
                    <span>%</span>
                </div>
            </div>
        </div>
    )
};