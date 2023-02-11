import React from 'react'
import { CurrentLocation, Search } from './index';

export const CurrentWeather = () => {
    return (
        <div className='sm:w-1/3 max-[865px]:h-full h-screen bg-BackgroundSecondary flex flex-col'>
            <div className='h-1/6 mx-3 mb-3 mt-10 px-5 flex justify-between'>
                <Search />
                <CurrentLocation />
            </div>
            <div className='flex flex-col justify-between h-5/6 my-10'>
                <div className='h-2/6 mx-3 flex flex-col justify-center items-center'>
                    <div className='flex justify-center -ml-7 relative'>
                        <img src='../../src/img/Cloud-background.png' alt='Background' className='z-0 opacity-25' />
                        <img src='../../src/img/Clear.png' alt='Imagen del clima de la ubicacion' className='z-10 absolute' />
                    </div>
                </div>
                <div className='mt-10 flex flex-row justify-center'>
                    <span className='text-9xl items-start text-TemperatureFontcolorDesabled'>1</span>
                    <span className='text-TempFont text-TemperatureFontcolorDesabled'>5</span>
                    <span className='ml-3 text-5xl flex items-center text-Temperature'>℃</span>
                </div>
                <h1 className='text-Temperature text-center text-4xl mt-'>Shower</h1>
                <div className='justify-between py-3'>
                    <p className='flex justify-center text-ColorInfoFonts'>Today - Fri, 5 Jun</p>
                    <div className='flex flex-row justify-center items-center mt-5 py-px text-ColorInfoFonts'>
                        <span className="material-symbols-outlined mr-1">location_on</span>
                        <p className='text-lg text-ColorInfoFonts'>Helsinki</p>
                    </div>
                </div>
            </div>
        </div>
    )
};