import React, { useEffect, useState } from 'react';
import {
  CurrentWeather,
  InfoContainer,
  Loading,
  Sidebar
} from './components/index';
import { useWeatherStore } from './store/weatherStore';

const App = () => {

  // Para determinar el alto de la pantalla
  const heigth =  window.screen.height;

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
    <div className={`bg-BackgroundPrincipal h-[${heigth}px] flex flex-col sm:flex-row`}>
      {
        !ubication
          ? <Loading />
          : <>
            <> {searchCity
              ? <Sidebar />
              : <CurrentWeather />
            }
            </>
            <InfoContainer />
          </>
      }
    </div>
  )
}

export { App }
