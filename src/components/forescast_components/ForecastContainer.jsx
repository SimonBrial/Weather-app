import React from 'react'
import { ForecastCard } from '../index';

const ForecastContainer = () => {
    return (
        <div className='w-full m-auto flex flex-wrap sm:items-center  sm:justify-center'>
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
        </div>
    )
};

export { ForecastContainer }