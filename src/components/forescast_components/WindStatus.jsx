import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';
import { IconWind } from '../index';

const WindStatus = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);
    //console.log(currentUbication)

    // Aqui se tiene que agregar la posicion de la flecha y la descripcion de los puntos cardinales
    // NOTA: los pasos de los angulos van a ser en porciones de 45 grados.

    const coord = () => {

        const coordinate = {
            north: 'N',
            northEast: 'NE',
            east: 'E',
            southEast: 'SE',
            south: 'S',
            southWest: 'SW',
            west: 'W',
            northWest: 'NW',
        }

        if (currentUbication !== null) {
            const direction = Math.abs((currentUbication.data.wind.deg) - (45));
            //console.log(currentUbication.data.wind.deg)

            if (direction > 337.5 && direction <= 360) {
                console.log('N = North');
                return <IconWind degRotate={direction} point={coordinate.north} />
            } else if (direction > 0 && direction <= 22.5) {
                console.log('N = North');
                return <IconWind degRotate={direction} point={coordinate.north} />
            } else if (direction > 22.5 && direction <= 67.5) {
                console.log('NE = North-East');
                return <IconWind degRotate={direction} point={coordinate.northEast} />
            } else if (direction > 67.5 && direction <= 112.5) {
                console.log('E = East');
                return <IconWind degRotate={direction} point={coordinate.east} />
            } else if (direction > 112.5 && direction <= 157.5) {
                console.log('SE = South - East');
                return <IconWind degRotate={direction} point={coordinate.southEast} />
            } else if (direction > 157.5 && direction <= 202.5) {
                console.log('S = South');
                return <IconWind degRotate={direction} point={coordinate.south} />
            } else if (direction > 202.5 && direction <= 247.5) {
                console.log('SW = South - West');
                return <IconWind degRotate={direction} point={coordinate.southWest} />
            } else if (direction > 247.5 && direction <= 292.5) {
                console.log('W = West');
                return <IconWind degRotate={direction} point={coordinate.west} />
            } else if (direction > 292.5 && direction <= 337.5) {
                console.log('NW = North - West');
                return <IconWind degRotate={direction} point={coordinate.northWest} />
            }
        } else {
            return <IconWind degRotate={180} point={'WSW'} />
        }
    };

    const convertion = () => {
        if (currentUbication == null) {
            console.log('Esta vacio el estado')
        } else {
            const speed = (currentUbication.data.wind.speed) * 2.237;
            return speed.toFixed(2);
        }
    };

    return (
        <div className='bg-BackgroundSecondary flex flex-col items-center w-80 py-4 mr-5 mb-5 sm:mb-0' >
            <h1 className='text-TemperatureFontcolorDesabled text-xl'>Wind Status</h1>
            <div className='flex flex-row mb-2'>
                {
                    (currentUbication == null)
                        ? <p className='text-TemperatureFontcolorDesabled text-5xl mx-2'>7</p>
                        : <p className='text-TemperatureFontcolorDesabled text-5xl mx-2'>{convertion()}</p>
                }
                <p className='text-TemperatureFontcolorDesabled text-5xl'>mph</p>
            </div>
            <div className='flex flex-row items-center'>
                {coord()}
            </div>
        </div>
    )
};

export { WindStatus }