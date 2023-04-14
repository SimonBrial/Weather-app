import React from 'react';

const IconWind = ({ degRotate, point }) => {
    return (
        <>
            <div className='flex flex-row items-center'>
                <div className='w-12 h-12 p-2 rounded-full bg-TemperatureButtonsDesabled relative'>
                    <span className="material-symbols-outlined text-white absolute left-3 top-3" style={{ rotate: `${degRotate}deg` }}>
                        near_me
                    </span>
                </div>
                <p className='text-TemperatureFontcolorDesabled ml-5 text-xl'>{point}</p>
            </div>
        </>
    )
}

export { IconWind }