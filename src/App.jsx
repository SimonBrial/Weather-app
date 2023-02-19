import React from 'react';
import {
  CurrentWeather, 
  InfoContainer
} from './components/index';
//import { WeatherState } from './context/weatherState';


const App = () => {

  return (
      <div className=' bg-BackgroundPrincipal flex flex-col sm:flex-row'>
        <CurrentWeather />
        <InfoContainer />
      </div>
  )
}

export { App }
