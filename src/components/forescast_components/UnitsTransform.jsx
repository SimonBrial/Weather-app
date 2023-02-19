import React from 'react';

const UnitsTransform = () => {
    return (
        <>
            <button className='w-10 h-10 rounded-full mx-1 bg-TemperatureButtonsAvalible  text-TemperatureFontcolorAvailable font-bold'>℃</button>
            <button className='w-10 h-10 rounded-full mx-1 bg-TemperatureButtonsDesabled text-TemperatureFontcolorDesabled font-bold'>°F</button>
        </>
    )
};

export { UnitsTransform }