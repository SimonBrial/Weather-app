import {
  CurrentWeather, InfoContainer
} from './components/index'


const App = () => {

  return (
    <div className='bg-BackgroundPrincipal flex flex-row flex-wrap'>
      <CurrentWeather />
      <InfoContainer />
    </div>
  )
}

export default App
