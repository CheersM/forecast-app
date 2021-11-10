import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { API_IMG } from '../api';
import Button from '../components/Button';
import DayForecastCard from '../components/DayForecastCard';
import { getDailyForecast } from '../redux/weatherReducer/action';
import HourlyForecastCard from '../components/HourlyForecastCard';

function ForecastPage() {
  const dispatch = useDispatch();
  const { weatherData } = useSelector((weather) => weather);
  const lat = weatherData.weather.coord?.lat;
  const lon = weatherData.weather.coord?.lon;
  const dailyForecast = weatherData.forecast?.daily;

  useEffect(() => {
    dispatch(getDailyForecast(lat, lon));
  }, [dispatch, lat, lon]);

  return (
    <div className="wrapper">
      <div className="forecast">
        <Link to="/home">
          <Button>
            <span>BACK TO HOMEPAGE</span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 7H14.7143"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Link>
        <h2>{weatherData.value}</h2>
        <div className="forecast__data">
          <img
            width={70}
            height={70}
            src={`${API_IMG}/${weatherData.weather.weather[0].icon}.png`}
            alt="icon"
          />
          <p className="temp">{Math.floor(weatherData.weather.main?.temp)}&deg;C</p>
          <div>
            <b>Feels like:</b>
            <span>{Math.floor(weatherData.weather.main?.feels_like)}&deg;C</span>
          </div>
          <div>
            <b>Max temperature:</b>
            <span>{Math.floor(weatherData.weather.main?.temp_max)}&deg;C</span>
          </div>
          <div>
            <b>Min temperature:</b>
            <span>{Math.floor(weatherData.weather.main?.temp_min)}&deg;C</span>
          </div>
          <div>
            <b>Sunrise:</b>
            <span>
              {new Date(weatherData.weather.sys?.sunrise * 1000).toLocaleTimeString('en-US')}
            </span>
          </div>
          <div>
            <b>Sunset:</b>
            <span>
              {new Date(weatherData.weather.sys?.sunset * 1000).toLocaleTimeString('en-US')}
            </span>
          </div>
          <div>
            <b>Wind speed:</b>
            <span>{weatherData.weather.wind?.speed}m/s</span>
          </div>
          <div>
            <b>Humidity:</b>
            <span>{weatherData.weather.main?.humidity} %</span>
          </div>
          <div>
            <b>Pressure:</b>
            <span>{weatherData.weather.main?.pressure} mm Hg</span>
          </div>
        </div>
        <HourlyForecastCard hourlyForecast={weatherData?.forecast?.hourly} />
        <div className="dayForecast">
          <h2>7 days forecast</h2>
          <div className="dayForecast__wrapper">
            {dailyForecast?.map((items) => (
              <DayForecastCard key={items.dt} items={items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForecastPage;
