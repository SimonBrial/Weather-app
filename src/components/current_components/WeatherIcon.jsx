import React from 'react';
import { WiSnow, WiDaySunny, WiCloud, WiCloudy, WiRain, WiShowers, WiHail, WiStormShowers } from "react-icons/wi";

const WeatherIcon = ({ id, stylesIcon }) => {

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
        '01d': <WiDaySunny className={stylesIcon}/>,
        '01n': <WiDaySunny className={stylesIcon}/>,
        '02d': <WiCloud className={stylesIcon}/>,
        '02n': <WiCloud className={stylesIcon}/>,
        '03d': <WiCloudy className={stylesIcon}/>,
        '03n': <WiCloudy className={stylesIcon}/>,
        '04d': <WiCloudy className={stylesIcon}/>,
        '04n': <WiCloudy className={stylesIcon}/>,
        '09d': <WiRain className={stylesIcon}/>,
        '09n': <WiRain className={stylesIcon}/>,
        '10d': <WiShowers className={stylesIcon}/>,
        '10n': <WiShowers className={stylesIcon}/>,
        '11d': <WiStormShowers className={stylesIcon}/>,
        '11n': <WiStormShowers className={stylesIcon}/>,
        '13d': <WiSnow className={stylesIcon}/>,
        '13n': <WiSnow className={stylesIcon}/>,
        '50d': <WiHail className={stylesIcon}/>,
        '50n': <WiHail className={stylesIcon}/>
    };

    const icon = weatherIcon[id];

    return (
        <>
            {/* <img src={`icons/${icon}`} alt='Imagen del clima de la ubicacion' /> */}
            {icon}
        </>
    )
};

export { WeatherIcon }