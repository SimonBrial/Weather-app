import { create } from 'zustand';
import shallow from 'zustand/shallow'
import axios from 'axios';

export const useWeatherStore = create((set) => ({
    celcius: true,
    farenheit: false,
    currentUbication: null,
    currentForecast: null,
    currentLocationData: () => new Promise((resolve, reject) => {
        try {
            const VITE_API_KEY = '8360a837b90921597f2af06ebf76fd77';

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

                set({ currentUbication: data[0] });
                set({ currentForecast: data[1] });

                resolve({
                    current: data[0],
                    forecast: data[1]
                })
            };

            navigator.geolocation.getCurrentPosition(success, error, options)

            const WeatherByLatAndLon = async (lat, lon) => {
                try {
                    // URL para el clima en la posicion actual
                    const URLcurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}`;
                    // URL para mostrar el clima de varios dias
                    const URLforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}`;
                    // Request del clima actual
                    const responseCurrent = await axios.get(URLcurrent);
                    //Request del clima de varios dias
                    const responseForecast = await axios.get(URLforecast);

                    return [responseCurrent, responseForecast];
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
    }),
    updateTemperature: (stateA, stateB) => {
        if (stateA === true && stateB === false) {
            return set({ 
                farenheit: true,
                celcius: false
            })
        } else {
            return set({
                farenheit: false,
                celcius: true
            })
        }
    }
}));