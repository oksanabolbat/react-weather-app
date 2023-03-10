import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import WeatherToday from './components/WeatherToday';
import WeeklyForecast from './components/WeelkyForecast';
import { getWeatherData, getWeatherForecast } from './api/api';
import { Circles } from 'react-loader-spinner';
import Footer from './components/Footer';
import { convertResponseDaily } from './helpers/helpers';

function App() {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric');
  const [todayData, setTodayData] = useState({
    temp: '',
    wind: '',
    humidity: '',
    time: '',
    city: '',
    description: '',
    icon: '',
    ready: true,
  });
  const [daily, setDaily] = useState([]);
  useEffect(() => {
    if (city !== '') {
      setTodayData({ ready: false });
      getWeatherData(city, units).then((response) =>
        setTodayData({
          temp: Math.round(response.data.main.temp),
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          time: response.data.dt,
          city: response.data.name,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          ready: true,
        })
      );

      getWeatherForecast(city, units).then((response) =>
        setDaily(convertResponseDaily(response))
      );
    }
  }, [city, units]);

  const updateCity = (city) => {
    setCity(city);
  };
  const changeUnits = (unitsValue) => {
    setUnits(unitsValue);
  };

  return (
    <div className="container">
      <header></header>
      <Search updateCity={updateCity} />
      {!todayData.ready && (
        <Circles
          height="80"
          width="80"
          color="#0d6efd"
          ariaLabel="loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClass=""
          visible={true}
        />
      )}

      {todayData.ready && city.length > 0 && (
        <WeatherToday
          data={todayData}
          changeUnits={changeUnits}
          units={units}
        />
      )}
      {daily.length > 0 && <WeeklyForecast data={daily} units={units} />}
      <Footer />
    </div>
  );
}

export default App;
