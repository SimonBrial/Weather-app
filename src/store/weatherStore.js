import { create } from 'zustand';
import shallow from 'zustand/shallow'
import axios from 'axios';

export const useWeatherStore = create((set) => ({
    celcius: true,
    farenheit: false,
    currentUbication: null,
    currentLocationData: () => new Promise((resolve, reject) => {
        try {
            const VITE_API_KEY = '064beb33ce0ae967d4f7da8952687ac3';

            if (!navigator.geolocation) {
                console.log('EL navegador no soporta la geolocalizacion')
            };
            const options = {
                enableHighAccuracy: true, // Alta precisión
                maximumAge: 0, // No queremos caché
                timeout: 5000 // Esperar solo 5 segundos
            };

            const error = (err) => { reject(new Error(`${err.message}`)) };

            const success = async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const data = await WeatherByLatAndLon(lat, lon)
                set({ currentUbication: data });
                resolve(data)
            };

            navigator.geolocation.getCurrentPosition(success, error, options)

            const WeatherByLatAndLon = async (lat, lon) => {
                try {
                    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}`;
                    const response = await axios.get(URL);
                    return response;
                }
                catch (err) {
                    console.log('HAY UN ERROR: ' + err)
                }
            };
        }
        catch (err) {
            console.log('Hay un error: ' + err);
            throw new Error('Error en WeatherByLatAndLon');
        }
    })
}
));