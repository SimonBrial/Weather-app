import {
    CURRENT_LOCATION_WEATHER,
    CURRENT_WEATHER,
    FORESCAST,
    SHOWER
} from './actions';

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SHOWER:
            return state;

        case CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: payload,
                celsius: true,
                fahrenheit: false,
            }

        case CURRENT_LOCATION_WEATHER:
            return {
                ...state,
                currentWeather: payload,
                celsius: true,
                fahrenheit: false,
            }
        default:
            return state;
    }
};