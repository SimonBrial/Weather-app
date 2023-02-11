import {
  CurrentWeather, InfoContainer
} from './components/index'


const App = () => {

  return (
    <div className=' bg-BackgroundPrincipal flex flex-col sm:flex-row'>
      <CurrentWeather />
      <InfoContainer />
    </div>
  )
}

export default App
