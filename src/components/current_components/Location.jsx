import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const Location = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    const [location, setLocation] = useState(null);
    const [locationCode, setLocationCode] = useState(null);

    useEffect(() => {
        setLocation(currentUbication.data.name)
        setLocationCode(currentUbication.data.sys.country);
    }, [])


return (
    <div className='flex flex-row justify-center items-center mt-1 py-px text-ColorInfoFonts'>
        <span className="material-symbols-outlined mr-1">location_on</span>
        {
            <p className='text-lg text-ColorInfoFonts'>{location}, {locationCode}</p>
        }
    </div>
)
}

export { Location }