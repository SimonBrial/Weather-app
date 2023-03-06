import React, { useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const Search = () => {
    
    const [searching, setSearching] = useState(false);

    const updateSearch = useWeatherStore(state => state.updateSearch)
    const searchCity = useWeatherStore(state => state.searchCity)


    const handleSearch = () => {
        if (searchCity ===  false) {
            updateSearch(searchCity)
            return setSearching(true)
        } else {
            updateSearch(searchCity)
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