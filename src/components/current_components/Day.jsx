import React from 'react'

const Day = () => {
    return (
        <div className='mt-10 flex flex-row justify-center'>
            {/* <span className='text-9xl items-start text-TemperatureFontcolorDesabled'>1</span> */}
            <span className='text-TempFont text-TemperatureFontcolorDesabled'>15</span>
            <span className='ml-3 text-5xl flex items-center text-Temperature'>℃</span>
        </div>
    )
};

export { Day }