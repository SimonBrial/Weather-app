import React, { useEffect, useState } from 'react';
import {
  CurrentWeather,
  InfoContainer,
  Loading,
  Sidebar,
  Alert
} from './components/index';
import { useWeatherStore } from './store/weatherStore';


const App = () => {

  const currentLocationData = useWeatherStore(state => state.currentLocationData);
  const searchCity = useWeatherStore(state => state.searchCity);

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
          : <>
              <> {searchCity ? <Sidebar /> : <CurrentWeather />}</>
              <InfoContainer />
            </>
      }
    </div>
  )
}

export { App }
