import React from 'react'

export const CurrentWeather = () => {
    return (
        <div className='w-1/3 h-screen bg-BackgroundSecondary flex flex-col'>
            <div className='h-1/6 mx-3 mb- px-5 py-10 flex justify-between'>
                <button className=' px-4 bg-BtnSearch text-TemperatureFontcolorDesabled'>Search for Places</button>
                <button className='w-10 h-10 rounded-full bg-BtnSearch'>
                    <span className="my-1.5 material-symbols-outlined text-TemperatureFontcolorDesabled">my_location</span>
                </button>
            </div>
            <div className='flex flex-col justify-between h-5/6 my-10'>
                <div className='h-2/6 my- mx-3 flex flex-col justify-center items-center'>
                    <div className='flex justify-center -ml-7 relative'>
                        <img src='../../src/img/Cloud-background.png' alt='Background' className='z-0 opacity-25' />
                        <img src='../../src/img/Clear.png' alt='Imagen del clima de la ubicacion' className='z-10 absolute' />
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
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