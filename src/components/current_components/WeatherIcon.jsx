import React, { useEffect, useState } from 'react';

const WeatherIcon = ({ id }) => {

    /**
     * 01d.png 	clear sky --------> Clear.png
     * 02d.png 	few clouds -------> LightCloud.png
     * 03d.png 	scattered clouds -> HeavyCloud.png
     * 04d.png 	broken clouds ----> HeavyCloud.png
     * 09d.png 	shower rain ------> HeavyRain.png
     * 10d.png 	rain -------------> LightRain.png
     * 11d.png 	thunderstorm -----> ThunderStorm.png
     * 13d.png 	snow -------------> Snow.png
     * 50d.png  mist -------------> Hail.png
     */

    const weatherIcon = {
        '01d': 'Clear.png',
        '01n': 'Clear.png',
        '02d': 'LightCloud.png',
        '02n': 'LightCloud.png',
        '03d': 'HeavyCloud.png',
        '03n': 'HeavyCloud.png',
        '04d': 'HeavyCloud.png',
        '04n': 'HeavyCloud.png',
        '09d': 'HeavyRain.png',
        '09n': 'HeavyRain.png',
        '10d': 'LightRain.png',
        '10n': 'LightRain.png',
        '11d': 'ThunderStorm.png',
        '11n': 'ThunderStorm.png',
        '13d': 'Snow.png',
        '13n': 'Snow.png',
        '50d': 'Hail.png',
        '50n': 'Hail.png'
    };

    const icon = weatherIcon[id];

    return (
        <>
            <img src={`../../src/img/${icon}`} alt='Imagen del clima de la ubicacion' />
        </>
    )
};

export { WeatherIcon }