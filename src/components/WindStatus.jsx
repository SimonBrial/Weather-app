import React from 'react'

export const WindStatus = () => {
    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center w-80 h-52 mr-5' >
            <h1 className='text-TemperatureFontcolorDesabled mt-4 mb-2 text-xl'>Wind Status</h1>
            <div className='flex flex-row mb-2'>
                <p className='text-TemperatureFontcolorDesabled text-5xl mx-2'>7</p>
                <p className='text-TemperatureFontcolorDesabled text-5xl'>mph</p>
            </div>
            <div className='flex flex-row items-center'>
                <div className='w-12 h-12 p-2 rounded-full bg-TemperatureButtonsDesabled relative'>
                    <span className="material-symbols-outlined text-white rotate-180 absolute left-3 top-3">
                        near_me
                    </span>
                </div>
                <p className='text-TemperatureFontcolorDesabled ml-5 text-xl'>WSW</p>
            </div>
        </div>
    )
};