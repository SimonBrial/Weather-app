import React, { useState, useEffect } from 'react'
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
        <div className='sm:w-1/3 bg-BackgroundSecondary flex flex-col'>
            <div className='h-1/6 mx-3 mb-3 mt-10 px-5 flex justify-between'>
                <Search />
                <CurrentLocation />
            </div>
            <div className='flex flex-col justify-between h-5/6 my-10'>
                <div className='flex justify-center '>
                    {/* <img src='icons/Cloud-background.svg' alt='Background' className='z-0 opacity-25' /> */}
                    {
                        currentUbication.data.weather.map((element) => {
                            return (
                                <div key={1} className='w-44'>
                                    <WeatherIcon id={element.icon} stylesIcon={'text-white w-72 h-72 -ml-14 -mt-24'}/>
                                </div>
                            )
                        })
                    }
                </div>
                <DayTemperature />
                <Details />
            </div>
        </div>
    )
};

export { CurrentWeather }