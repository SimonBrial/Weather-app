import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ForecastCard } from '../index';
import { useWeatherStore } from '../../store/weatherStore';

const ForecastContainer = () => {
    const currentForecast = useWeatherStore(state => state.currentForecast);

    const dateFormating = () => {
        if (currentForecast == null) {
            console.log('Esta vaina esta vacia')
        } else {

            const data = currentForecast.data.list;
            const dataShow = data.map((dat) => {
                const fecha = dat.dt_txt.split(' ').shift();
                const max = dat.main.temp_max;
                const min = dat.main.temp_min;
                const formatDate = dayjs(fecha).format('ddd, MMM D');
                return [formatDate, max, min];
            })
            
            return dataShow
        }
    }

    const infoForecast = dateFormating();
    //console.log(infoForecast)

    return (
        <div className='pt-2 w-full m-auto flex flex-wrap sm:items-center sm:justify-center'>
            {
                (currentForecast == null)
                    ? <>
                        <ForecastCard date={'Sat, Feb 25'} />
                        <ForecastCard date={'Sat, Feb 25'} />
                        <ForecastCard date={'Sat, Feb 25'} />
                        <ForecastCard date={'Sat, Feb 25'} />
                        <ForecastCard date={'Sat, Feb 25'} />
                    </>
                    : <>{
                        infoForecast.map((date, i, arr) => {
                            if ((i % 7) === 0) {
                                if (i != 0) {
                                    return <ForecastCard key={i} date={date[0]} maxTemp={date[1]} minTemp={date[2]} />
                                }
                            }
                        })
                    }</>
            }

        </div >
    )
};

export { ForecastContainer }