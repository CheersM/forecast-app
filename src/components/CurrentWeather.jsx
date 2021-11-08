import React from 'react';
import moment from 'moment';
import { SyncOutlined } from '@ant-design/icons';

function CurrentWeather({ weatherInfo }) {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="current-town">
      <div className="current-town__top">
        <p className="name">
          <span>Your city: </span>
          <strong>{weatherInfo.name}</strong>
        </p>
        <SyncOutlined onClick={refresh} className="refresh" />
      </div>
      <div className="current-town__flex">
        <p className="day">
          {moment().format('dddd')}, <span>{moment().format('LL')}</span>
        </p>
        <p className="description">{weatherInfo.weather[0].main}</p>
      </div>

      <div className="current-town__flex">
        <p className="temp">Temprature: {Math.floor(weatherInfo.main.temp)} &deg;C</p>
        <p className="temp">Humidity: {weatherInfo.main.humidity} %</p>
      </div>

      <div className="current-town__flex">
        <p className="sunrise-sunset">
          Sunrise: {new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
        </p>
        <p className="sunrise-sunset">
          Sunset: {new Date(weatherInfo.sys.sunset * 1000).toLocaleTimeString('en-IN')}
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
