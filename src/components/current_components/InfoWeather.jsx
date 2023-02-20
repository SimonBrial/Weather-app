import React from 'react'
import { useWeatherStore } from '../../store/weatherStore'

const InfoWeather = () => {
    const currentUbication = useWeatherStore(state => state.currentUbication);
    
    return (
        <>
            {
                (currentUbication === null)
                    ? <h1 className='text-Temperature text-center text-4xl mt-'>Shower</h1>
                    : <h1 className='text-Temperature text-center text-4xl mt-'>{
                        currentUbication.data.weather.map(info => {
                            return info.main
                        })
                    }</h1>
            }
        </>
    )
}

export { InfoWeather }