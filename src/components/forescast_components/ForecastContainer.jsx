import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ForecastCard } from '../index';
import { useWeatherStore } from '../../store/weatherStore';

const ForecastContainer = () => {
    const currentForecast = useWeatherStore(state => state.currentForecast);

    const [forecard, setForecard] = useState([]);

    useEffect(() => {
        const dataShow = currentForecast.data.list.map((dat) => {
            const fecha = dat.dt_txt.split(' ').shift();
            const max = dat.main.temp_max;
            const min = dat.main.temp_min;
            const formatDate = dayjs(fecha).format('ddd, MMM D');
            const id = dat.weather.map((iconId) => {
                return iconId.icon;
            });
            return [formatDate, max, min, id];
        })

        return setForecard(dataShow)
    }, []);


    return (
        <div className='pt-2 w-full m-auto flex flex-wrap sm:items-center sm:justify-center'>
            {
                <>{
                    forecard.map((date, i, arr) => {
                        if ((i % 7) === 0) {
                            if (i != 0) {
                                return <ForecastCard key={i} date={date[0]} maxTemp={date[1]} minTemp={date[2]} id={date[3]} />
                            }
                        }
                    })
                }</>
            }

        </div >
    )
};

export { ForecastContainer }