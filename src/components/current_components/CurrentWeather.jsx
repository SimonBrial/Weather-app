import React from 'react'
import {
    CurrentLocation,
    WeatherIcon,
    Details,
    Search,
    DayTemperature
} from '../index';
import { useWeatherStore } from '../../store/weatherStore';

const CurrentWeather = () => {
    const currentUbication = useWeatherStore(state => state.currentUbication);

    return (
        <div className='sm:w-1/3 max-[865px]:h-full h-screen bg-BackgroundSecondary flex flex-col'>
            <div className='h-1/6 mx-3 mb-3 mt-10 px-5 flex justify-between'>
                <Search />
                <CurrentLocation />
            </div>
            <div className='flex flex-col justify-between h-5/6 my-10'>
                <div className='flex justify-center -ml-7 relative'>
                    <img src='../../src/img/Cloud-background.png' alt='Background' className='z-0 opacity-25' />
                    <div key={1} className='z-10 absolute w-44 mt-6'>
                        {
                            currentUbication.data.weather.map((element) => {
                                return <WeatherIcon id={element.icon}/>
                            })
                        } 
                    </div>
                </div>
                <DayTemperature />
                <Details />
            </div>
        </div>
    )
};

export { CurrentWeather }