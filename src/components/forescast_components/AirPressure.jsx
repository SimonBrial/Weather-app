import React from 'react'

const AirPressure = () => {
    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center justify-center w-80 h-50 mt-5 mr-5' >
        <h1 className='text-TemperatureFontcolorDesabled mt-4 mb-2 text-xl'>Air Pressure</h1>
        <div className='flex flex-row mb-2 items-center'>
            <div className='flex '>
                <p className='text-TemperatureFontcolorDesabled text-5xl'>99</p>
                <p className='text-TemperatureFontcolorDesabled text-5xl -mt-2'>8</p>
            </div>
            <p className='text-TemperatureFontcolorDesabled text-3xl ml-1'>mb</p>
        </div>
    </div>
    )
};

export { AirPressure }