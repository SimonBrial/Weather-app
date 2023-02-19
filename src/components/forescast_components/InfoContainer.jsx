import React from 'react';
import { Container, Footer, ForecastContainer, UnitsTransform } from '../index';

const InfoContainer = () => {
    return (
        <div className='p-5 w-full sm:w-2/3 max-[866px]:h-full h-screen flex flex-col m-auto sm:items-center'>
            <div className='h-1/3 flex flex-col '>
                <div className='flex justify-end mr-10 sm:mr-0'>
                    <UnitsTransform />
                </div>
                <div className='flex justify-items-center sm:items-center'>
                    <ForecastContainer />
                </div>
            </div>
            <div className='h-2/3'>
                <Container />
            </div>
            <footer className='flex items-end justify-center mt-4 sm:mt-0'>
                <Footer />
            </footer>
        </div>
    )
};

export { InfoContainer }