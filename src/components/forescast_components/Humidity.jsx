import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const Humidity = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const humidityValue = () => {
        if (currentUbication == null) {
            return console.log('Esta vacio el estado');
        } else {
            const humidity = currentUbication.data.main.humidity;
            return humidity
        }
    }

    const humidity = humidityValue();
    console.log(humidity)

    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center w-80 h-52 mr-5' >
            <h1 className='text-TemperatureFontcolorDesabled mt-4 mb-2 text-xl'>Humidity</h1>
            <div className='flex flex-row mb-2 items-center'>
                <div className='flex '>
                    {/* <p className='text-TemperatureFontcolorDesabled text-5xl -mt-2'>8</p> */}
                    {
                        (currentUbication == null)
                            ? <p className='text-TemperatureFontcolorDesabled text-5xl'>84</p>
                            : <p className='text-TemperatureFontcolorDesabled text-5xl'>{humidityValue()}</p>
                    }
                </div>
                <p className='text-TemperatureFontcolorDesabled text-3xl ml-1'>%</p>
            </div>
            <div className='w-4/6'>
                <div className='flex justify-between'>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>0</span>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>50</span>
                    <span className='text-TemperatureFontcolorDesabled test-lg'>100</span>
                </div>
                <div className='relative' id='humidity'>
                    <span className='px-24 h-3 bg-white absolute index-0 rounded-xl addHumidity'></span>
                    {
                        (currentUbication == null) 
                        ? <span className='px-[84px] h-3 bg-amber-300 absolute index-10 rounded-xl'></span>
                        : <span className={`px-[${humidity}px] h-3 bg-amber-300 absolute index-10 rounded-xl`}></span>
                    }
                </div>
                <div className='text-TemperatureFontcolorDesabled text-end mt-2 mr-2'>
                    <span>%</span>
                </div>
            </div>
        </div>
    )
};

export { Humidity }