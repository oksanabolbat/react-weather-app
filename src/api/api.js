import axios from 'axios';

export const apiKey = '668da14f2dd183d5f357bb8c35faa1a0';
//const units = 'metric';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
export const icons = {
  '01d': ['clear-sky-day', 'Clear sky'],
  '02d': ['few-clouds-day', 'Few clouds'],
  '03d': ['scattered-clouds-day', 'Scattered clouds'],
  '04d': ['broken-clouds-day', 'Broken clouds'],
  '09d': ['shower-rain-day', 'Shower rain'],
  '10d': ['rain-day', 'Rain'],
  '11d': ['thunderstorm-day', 'Thunderstorm'],
  '13d': ['snow-day', 'Snow'],
  '50d': ['mist-day', 'Mist'],
  '01n': ['clear-sky-night', 'Clear sky'],
  '02n': ['few-clouds-night', 'Few clouds'],
  '03n': ['scattered-clouds-night', 'Scattered clouds'],
  '04n': ['broken-clouds-night', 'Broken clouds'],
  '09n': ['shower-rain-night', 'Shower rain'],
  '10n': ['rain-night', 'Rain'],
  '11n': ['thunderstorm-night', 'Thunderstorm'],
  '13n': ['snow-night', 'Snow'],
  '50n': ['mist-night', 'Mist'],
};

export const getWeatherData = (city, units) => {
  return axios
    .get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units,
      },
    })
    .then((response) => response);
};

export const getWeatherForecast = (city, units) => {
  console.log(city, units);
  return axios
    .get(`https://api.shecodes.io/weather/v1/forecast`, {
      params: {
        query: city,
        key: '5o0a7ff1b9010e3b3ffaeet4f9642424',
        units,
      },
    })
    .then((response) => response.data.daily);
};

export const getCityNameByCoords = (coords) => {
  return axios
    .get(apiUrl, {
      params: {
        lat: coords.latitude,
        lon: coords.longitude,
        appid: apiKey,
      },
    })
    .then((response) => response.data.name);
};
