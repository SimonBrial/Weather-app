import React from 'react'
import { ForecastCard } from './index';

export const ForecastContainer = () => {
    return (
        <div className='w-full flex justify-center flex-wrap'>
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
        </div>
    )
};