import { Visibility } from "../components";

export const celcius = (kelvin) => {
    const celcius = kelvin - 273.15;
    return celcius.toFixed(2);
};

export const farenheit = (kelvin) => {
    const farenheit = (kelvin - 273.15) * (9 / 5) + 32;
    return farenheit.toFixed(2);
};

export const pressure = (value) => {
    const pressureValue = value * 0.0145;
    return pressureValue.toFixed(2);
}

export const visibilityValue = (visibility) => {
    const value = (visibility) / (1609)
    return value.toFixed(2);
}

export const convertion = (temp, state) => {
    // La variable "temp" esta en KELVIN, asi que no hay problemas por la conversion
    if (state) { // farenheit = false
        return celcius(temp)
    } else { // farenheit = true
        return farenheit(temp)
    }
};