import React from 'react';
import dayjs from 'dayjs';
import { ForecastCard } from '../index';
import { useWeatherStore } from '../../store/weatherStore';

const ForecastContainer = () => {
    const currentForecast = useWeatherStore(state => state.currentForecast);

    const dateFormating = () => {
        if (currentForecast == null) {
            console.log('Esta vaina esta vacia')
        } else {

            const b = dayjs('2023-02-24').format('ddd, MMM D')
            console.log(b)
            const options = {
                year: "2-digit",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                weekday: "long"
            }

            // HACE FALTA REVISAR MEJOR ESTO
            
            const data = currentForecast.data.list;
            //const day = new Date();
            const dates = [];
            data.map((elemt) => {
                const fecha = elemt.dt_txt
                const formatDate = dayjs(fecha).format('ddd, MMM D')
                //const formatDate = new Intl.DateTimeFormat('en-US', options).format(day);
                dates.push(formatDate)
                console.log(fecha)
                console.log(formatDate)
                return dates;
            })
        }
    }
    const prueba = dateFormating()
    //console.log(prueba)

    return (
        <div className='w-full m-auto flex flex-wrap sm:items-center  sm:justify-center'>
            <ForecastCard date={'24/2/2023'} />
            <ForecastCard date={'24/2/2023'} />
            <ForecastCard date={'24/2/2023'} />
            <ForecastCard date={'24/2/2023'} />
            <ForecastCard date={'24/2/2023'} />
        </div>
    )
};

export { ForecastContainer }