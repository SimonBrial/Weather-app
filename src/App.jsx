import React, { useEffect, useState } from 'react';
import {
  CurrentWeather,
  InfoContainer,
  Loading,
  Alert
} from './components/index';
import { useWeatherStore } from './store/weatherStore';


const App = () => {

  const currentLocationData = useWeatherStore(state => state.currentLocationData);

  const [ubication, setUbication] = useState(false);

  useEffect(() => {
    currentLocationData()
      .then(() => {
        setUbication(true);
      })
      .catch((error) => {
        console.log('Hay un error: ' + error);
      })
  }, [])

  return (
    <div className=' bg-BackgroundPrincipal flex flex-col sm:flex-row'>
      {
        !ubication
          ? <Loading />
          : <> <CurrentWeather /> <InfoContainer /> </>
      }
    </div>
  )
}

export { App }
