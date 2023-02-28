import React from 'react';
import { WindStatus, Humidity, Visibility, AirPressure } from '../index';


const Container = () => {

    return (
        <div className='flex flex-col pt-5'>
            <h1 className='text-TemperatureFontcolorDesabled text-2xl pb-5 sm:ml-20 flex justify-self-start'>Today's Highlights</h1>
            <div className='flex flex-row flex-wrap justify-center pt-2'>
                <WindStatus />
                <Humidity />
                <Visibility />
                <AirPressure />
            </div>
        </div>
    )
};

export { Container }