import React, { useState } from 'react';
import { useWeatherStore } from '../store/weatherStore';

const Alert = () => {

    const currentLocationData = useWeatherStore(state => state.currentLocationData);
    
    //const currentUbication = useWeatherStore(state => state.currentUbication);

    //const [info, setInfo] = useState(false)

    /* const globalState = () => {
        const data = currentLocationData()
        if (data !== null) {
            setInfo(true);
            console.log('tengo la informacion en el estado guradada')
            console.log(info)
            console.log(currentUbication)
        } else {
            setInfo(false)
            console.log('no hay informacion en el estado guradada')
        }
    }; */

    return (
        <div className='p-5 bg-slate-100 border-2 rounded-md flex flex-col justify-center items-center text-center m-auto'>
            <h1 className='text-xl'>Let me know your ubication</h1>
            <button onClick={currentLocationData()} className='border-2 rounded-md border-slate-500 bg-slate-300 w-20 my-3  hover:transition ease-in-out duration-300 hover:bg-slate-400 hover:text-white'>Click Me!</button>
        </div>
    )
};

export { Alert };