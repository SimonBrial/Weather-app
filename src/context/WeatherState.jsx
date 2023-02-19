import React, { useReducer } from 'react';
import { WeatherContext } from './WeatherContext';
import { WeatherReducer } from './WeatherReducer';
import { 
    WeatherByCityAndCode, 
    WeatherByLatAndLon, 
    CurrentLocation 
} from '../api'
import { CURRENT_LOCATION_WEATHER } from './actions';
import axios from 'axios';
//import { WeatherByCityAndCode, CurrentLocation } from '../../src/api/apiRequest';

const WeatherState = ({ children }) => {
    const initialState = {
        current: {},
        forecast: {},
        // loading: true,
        // errors: null,
        celsius: null,
        fahrenheit: null
    };

    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    const ByCurrentBtn = async () => {
        try {
            const current = await CurrentLocation();
            const lat = current.latitude;
            const lon = current.longitude;
            
            const data = await WeatherByLatAndLon(lat, lon);
            console.log(data); 

            dispatch({
                type: CURRENT_LOCATION_WEATHER,
                payload: data
            })
        }
        catch (error) {
            return console.log('HAY UN ERROR: ' + error);
        }
    };

    return (
        <WeatherContext.Provider value={{
            current: state.current,
            celsius: state.celsius,
            fahrenheit: state.fahrenheit,
            ByCurrentBtn
        }}>
            {children}
        </WeatherContext.Provider>
    )
};

export { WeatherState }