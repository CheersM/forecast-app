import axios from 'axios';
import { API_URL, API_KEY } from '../../api';

export const setCity = (city) => ({
  type: 'SET_CITY',
  payload: city,
});

export const fetchWeather = (searchValue) => (dispatch) => {
  try {
    axios
      .get(`${API_URL}/weather/?q=${searchValue}&units=metric&appid=${API_KEY}`)
      .then(({ data }) => {
        dispatch(setWeather(data));
        dispatch(setCity(data.name));
      });
  } catch (error) {
    console.error(error);
  }
};

export const getDailyForecast = (lat, lon) => (dispatch) => {
  try {
    axios
      .get(`${API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
      .then(({ data }) => {
        dispatch(setDailyForecast(data));
      });
  } catch (error) {
    console.error(error);
  }
};

export const setWeather = (weather) => ({
  type: 'SET_WEATHER',
  payload: weather,
});

export const setDailyForecast = (forecast) => ({
  type: 'SET_DAILY_FORECAST',
  payload: forecast,
});
