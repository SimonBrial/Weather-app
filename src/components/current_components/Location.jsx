import React from 'react';
import { useWeatherStore } from '../../store/weatherStore';

const Location = () => {

    const currentUbication = useWeatherStore(state => state.currentUbication);

    return (
        <div className='flex flex-row justify-center items-center mt-5 py-px text-ColorInfoFonts'>
            <span className="material-symbols-outlined mr-1">location_on</span>
            {
                (currentUbication === null)
                    ? <p className='text-lg text-ColorInfoFonts'>Helsinki</p>
                    : <p className='text-lg text-ColorInfoFonts'>{currentUbication.data.name}</p>
            }
        </div>
    )
}

export { Location }