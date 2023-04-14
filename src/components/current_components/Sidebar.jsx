import React, { useState, useRef } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const Sidebar = () => {

    const citiesInput = useRef(null);

    const updateSearch = useWeatherStore(state => state.updateSearch)
    const searchCity = useWeatherStore(state => state.searchCity)
    const ByCityCurrentWeather = useWeatherStore(state => state.ByCityCurrentWeather)

    const handleClose = () => {
        if (searchCity === false) {
            updateSearch(searchCity)
        } else {
            updateSearch(searchCity)
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const inputValue = citiesInput.current.value.split(',');
        const city = inputValue[0];
        const code = inputValue[1];
        ByCityCurrentWeather(city, code)
            .then(datos => {
                //console.log(datos)
                return datos
            })
            .catch(error => console.log(error))

    };

    return (
        <div className='flex flex-col justify-center bg-BackgroundSecondary w-full sm:w-1/3 z-20'>
            <div>
                <button className='text-white text-2xl flex justify-end w-full pr-12 pt-5 hover:font-bold transition ease-in-out duration-500' onClick={handleClose}>X</button>
            </div>
            <form className='m-auto w-full px-8 mt-5 h-12 flex'>
                <input
                    className=" h-full p-2 mx-2 bg-gray-50  border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-2/3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-xl"
                    placeholder='Search Location'
                    type="text"
                    ref={citiesInput}
                />
                <button
                    className=' w-1/3 text-white text-lg font-bold p-1 -full ml-1 bg-BackgroundBtnSearch hover:bg-blue-500 transition ease-in-out duration-150'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </form>
            <div></div>
        </div>
    )
}

export { Sidebar }