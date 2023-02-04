import {
  ConcurrentWeather,
  Search,
  UnitsTransform,
  CurrentLocation,
  Container,
  WeatherDay
} from './components/index'


const App = () => {

  return (
    <div >
      <Search />
      <WeatherDay />
      <ConcurrentWeather />
      <UnitsTransform />
      <CurrentLocation />
      <Container />
    </div>
  )
}

export default App
