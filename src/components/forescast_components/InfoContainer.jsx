import React from 'react';
import { Container, Footer, ForecastContainer, UnitsTransform } from '../index';

const InfoContainer = () => {
    // Para determinar el alto de la pantalla
    const heigth = window.screen.height;
    console.log(heigth)

    return (
        <div className={`p-5 h-[${heigth}px] w-full sm:w-2/3 flex flex-col m-auto sm:items-center bg-BackgroundPrincipal`}>
            <div className='h-1/3 flex flex-col pt-1'>
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