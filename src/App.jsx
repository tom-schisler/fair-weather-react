import './components/css/main.css'
import Header from './components/header/header';
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_URL, WEATHER_API_KEY} from './api';
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);
    const [lat,lon] = searchData.value.split(" ");
    
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial&lang=en`);    
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial&lang=en&cnt=16`);

    Promise.all([currentWeatherFetch,forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecastWeather({city: searchData.label, ...forecastResponse});
    })
    .catch( (error) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <section className="app">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} /> }
      {forecastWeather && <Forecast data={forecastWeather} /> }
    </section>
  )
}

export default App
