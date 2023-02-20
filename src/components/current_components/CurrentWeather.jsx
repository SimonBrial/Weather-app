import React from 'react'
import { 
    CurrentLocation,
    WeatherIcon, 
    Details, 
    Search, 
    DayTemperature
} from '../index';

const CurrentWeather = () => {
    return (
        <div className='sm:w-1/3 max-[865px]:h-full h-screen bg-BackgroundSecondary flex flex-col'>
            <div className='h-1/6 mx-3 mb-3 mt-10 px-5 flex justify-between'>
                <Search />
                <CurrentLocation />
            </div>
            <div className='flex flex-col justify-between h-5/6 my-10'>
                <WeatherIcon />
                <DayTemperature />
                <Details />
            </div>
        </div>
    )
};

export { CurrentWeather }