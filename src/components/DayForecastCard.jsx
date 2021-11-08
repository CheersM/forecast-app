import moment from 'moment';
import React from 'react';
import { API_IMG } from '../api';

function DayForecastCard({ items }) {
  const dateTimeString = moment.unix(items.dt).format('dddd');

  return (
    <div className="dayForecast-block">
      <h3>{dateTimeString}</h3>
      <img src={`${API_IMG}/${items.weather[0].icon}.png`} alt="icon" />
      <span>{items.weather.description}</span>
      <span>{Math.floor(items.temp.max)}&deg;C</span>
    </div>
  );
}

export default DayForecastCard;
