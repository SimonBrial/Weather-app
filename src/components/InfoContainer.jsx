import React from 'react';
import { Container, ForecastContainer, UnitsTransform } from './index';

export const InfoContainer = () => {
    return (
        <div className='p-5 w-2/3 flex flex-col items-center'>
            <div className='h-1/3 flex flex-col'>
                <div className='flex justify-end'>
                    <UnitsTransform />
                </div>
                <div className='items-center'>
                    <ForecastContainer />
                </div>
            </div>
            <div className='h-2/3'>
                <Container />
            </div>
            <footer className='flex items-end mt-5'>
                <p className='text-TemperatureFontcolorDesabled'>Created by <span className='text-orange-400'>Simon Briceño</span> - devChallenges.io</p>
                <span>
                    <img src='../../src/img/devchallenges.png' className='w-5 h-5 mx-2'/>
                </span>
            </footer>
        </div>
    )
};