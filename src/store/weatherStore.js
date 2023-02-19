import { create } from 'zustand';
import { CurrentLocation, WeatherByLatAndLon } from '../api/apiRequest';
import axios from 'axios';

export const useWeatherStore = create(() => ({
    //currentUbication: [],
    prueba: async () => {
        try {
            const VITE_API_KEY = '064beb33ce0ae967d4f7da8952687ac3';

            if (!navigator.geolocation) {
                console.log('EL navegador no soporta la geolocalizacion')
            }
            const options = {
                enableHighAccuracy: true, // Alta precisión
                maximumAge: 0, // No queremos caché
                timeout: 5000 // Esperar solo 5 segundos
            };

            const error = (err) => { new Error(`${err.message}`) };

            const success = (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                console.log(lat, lon);
                const response = WeatherByCityAndCode(lat, lon)
                return console.log(response.data);
            };

            await navigator.geolocation.getCurrentPosition(success, error, options)

            const WeatherByCityAndCode = async (lat, lon) => {
                try {
                    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}`;
                    console.log(URL)
                    console.log('DESDE LA FUNCION PARA OBTENER LA DATA')
                    const response = await axios.get(URL);
                    return console.log(response)
                }
                catch (err) {
                    console.log('HAY UN ERROR: ' + err)
                }
            };
        }
        catch (err) {
            console.log('Hay un error: ' + err);
        }
    }
}));

/* const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${VITE_API_KEY}`;
const response = await axios.get(URL);
console.log(response) */
/**
 * const ByCurrentBtn = async () => {
        try {
            const current = await CurrentLocation();
            const lat = current.latitude;
            const lon = current.longitude;
            
            const data = await WeatherByLatAndLon(lat, lon);
            console.log(data); 

        }
        catch (error) {
            return console.log('HAY UN ERROR: ' + error);
        }
    };
 */