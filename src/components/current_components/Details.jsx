import React from 'react'
import { 
    Today, 
    InfoWeather, 
    Location 
} from '../index';

const Details = () => {

    return (
        <div className='h-2/6 mx-3 flex flex-col justify-center items-center'>
            <InfoWeather />
            <div className='justify-between py-3'>
                <p className='flex justify-center text-ColorInfoFonts'>
                    <Today />
                </p>
                <Location />
            </div>
        </div>
    )
};

export { Details }