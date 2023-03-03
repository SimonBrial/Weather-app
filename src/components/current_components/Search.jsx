import React, { useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const Search = () => {
    const updateSearch = useWeatherStore(state => state.updateSearch)
    const searchCity = useWeatherStore(state => state.searchCity)

    const [searching, setSearching] = useState(false);

    const handleSearch = () => {
        if (searchCity ===  false) {
            console.log(searching)
            updateSearch(searchCity)
            console.log(searchCity)
            return setSearching(true)
        } else {
            console.log(searching)
            updateSearch(searchCity)
            console.log(searchCity)
            return setSearching(false)
        }
    };

    return (
        <button
            className=' px-4 h-10 bg-BtnSearch text-TemperatureFontcolorDesabled'
            onClick={handleSearch}
        >
            Search for Places
        </button>
    )
}

export { Search }