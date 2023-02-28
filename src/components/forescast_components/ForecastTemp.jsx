import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';
import { convertion } from '../../assets/utils';

const ForecastTemp = ({ max, min }) => {

    const farenheit = useWeatherStore(state => state.farenheit);
    const currentForecast = useWeatherStore(state => state.currentForecast);

    const [temperatura, setTemperature] = useState();
    const [grados, setGrados] = useState(false);

    useEffect(() => {
        const convertion = (kelvin) => {
            if (farenheit) { // farenheit = false
                const celciusTemp = kelvin - 273.15;
                return celciusTemp.toFixed(1);
            } else { // farenheit = true
                const farenheitTemp = (kelvin - 273.15) * (9 / 5) + 32;
                return farenheitTemp.toFixed(1);
            }
        };
    }, [])

    

    return (
        <>
            <div className='flex flex-row justify-center mx-1 '>
                <span className='text-lg text-TemperatureFontcolorDesabled'>{convertion(max)}</span>
                <span className='ml-1 text-md flex items-center text-TemperatureFontcolorDesabled'>
                    {
                        (farenheit)
                            ? <>℃</>
                            : <>°F</>
                    }
                </span>
            </div>
            <div className='flex flex-row justify-center mx-1 px-1'>
                <span className='text-lg text-Temperature'>{convertion(min)}</span>
                <span className='ml-1 text-md flex items-center text-Temperature'>
                    {
                        (farenheit)
                            ? <>℃</>
                            : <>°F</>
                    }
                </span>
            </div>
        </>
    )
}

export { ForecastTemp }