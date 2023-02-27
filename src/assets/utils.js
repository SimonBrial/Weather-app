export const celcius = (kelvin) => {
    const celcius = kelvin - 273.15;
    return celcius.toFixed(2);
};