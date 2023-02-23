import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const WindStatus = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    // Aqui se tiene que agregar la posicion de la flecha y la descripcion de los puntos cardinales
    if (currentUbication == null) {
        console.log('Esta vacio el estado');
    } else {
        const direction = currentUbication.data.wind.deg;
        if (direction > 350 && direction <= 22.5) {
            console.log('N')
        } else if (direction > 22.5 && direction <= 30) {
            console.log('No esta en el rango')
        } else if (direction > 30 && direction <= 50) {
            console.log('No esta en el rango')
        } else if (direction > 50 && direction <= 70) {
            console.log('No esta en el rango')
        } else if (direction > 70 && direction <= 90) {
            console.log('No esta en el rango')
        } else if (direction > 90 && direction <= 110) {
            console.log('No esta en el rango')
        } else if (direction > 110 && direction <= 130) {
            console.log('No esta en el rango')
        } else if (direction > 10 && direction <= 30) {
            console.log('No esta en el rango')
        } else if (direction > 10 && direction <= 30) {
            console.log('No esta en el rango')
        }
        else {
            console.log('No esta en el rango')
        }
    }
    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center w-80 h-52 mr-5 mb-5 sm:mb-0' >
            <h1 className='text-TemperatureFontcolorDesabled mt-4 mb- text-xl'>Wind Status</h1>
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

export { WindStatus }