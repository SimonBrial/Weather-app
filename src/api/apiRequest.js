//import apiService from './apiOptions';
import axios from 'axios';

const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';

// Request by City and Country Code
const WeatherByCityAndCode = async (city, code) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${VITE_API_KEY}&units=metrics`;
    const response = await axios.get(URL);
    return response
};

/* const prueba = () => new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
        reject({
            error: true,
            message: console.log('EL navegador no soporta la geolocalizacion')
        })
    }
    navigator.geolocation.getCurrentPosition((position) => {
        resolve: ({
            error: false,
            coords: console.log(position.coords)
        })
    })
}); */

// Request by Latitude and Longitude
const WeatherByLatAndLon = async (lat, lon) => {
    try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}`;
        const response = await axios.get(URL);
        return response.data;
    }
    catch (err) {
        console.log('Hay un error: ' + err);
    }
};

// Request by current location
const CurrentLocation = async () => {
    try {
        if (!navigator.geolocation) {
            console.log('EL navegador no soporta la geolocalizacion')
        }
    
        const success = (position) => {
            return position.coords
        };
    
        const error = (err) => { new Error(`${err.message}`) };
    
        const options = {
            enableHighAccuracy: true, // Alta precisión
            maximumAge: 0, // No queremos caché
            timeout: 5000 // Esperar solo 5 segundos
        };
    
        await navigator.geolocation.getCurrentPosition(success, error, options)
    }
    catch (err) {
        console.log('Hay un error: ' + err);
    }
};

export {
    WeatherByCityAndCode,
    WeatherByLatAndLon,
    CurrentLocation
}