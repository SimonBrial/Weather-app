import React, { useEffect, useState } from 'react'
import { useWeatherStore } from '../../store/weatherStore'

const InfoWeather = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const [weather, setWeather] = useState([]);

    useEffect(() => {
        setWeather(currentUbication.data.weather);
    }, []) 

    return (
        <>
            {
                <h1 className='text-Temperature text-center text-4xl mt-'>{
                    weather.map(info => {
                        return info.main
                    })
                }</h1>
            }
        </>
    )
}

export { InfoWeather }