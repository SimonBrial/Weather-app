import React from 'react'

const WeatherIcon = () => {
    return (
        <div className='flex justify-center -ml-7 relative'>
            <img src='../../src/img/Cloud-background.png' alt='Background' className='z-0 opacity-25' />
            <img src='../../src/img/Clear.png' alt='Imagen del clima de la ubicacion' className='z-10 absolute' />
        </div>
    )
};

export { WeatherIcon }