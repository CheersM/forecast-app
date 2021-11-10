import moment from 'moment';
import React from 'react';

function HourlyForecastCard({ hourlyForecast }) {
  return (
    <div className="hourlyForecast">
      <h2>Hourly forecast</h2>
      <div className="hourlyForecast-block">
        <div className="date">
          {hourlyForecast.map((item) => (
            <span key={item.dt}>{moment.unix(item.dt).format('LT')}</span>
          ))}
        </div>
        <div className="zero">
          {hourlyForecast.map((item) => (
            <span
              key={item.dt}
              style={
                item.temp > 0
                  ? { bottom: item.temp, background: 'linear-gradient(#f69d3c, #ebf8e1)' }
                  : { bottom: item.temp, background: 'linear-gradient(#ebf8e1, #3f87a6)' }
              }>
              {item.temp > 0 ? '+' + Math.floor(item.temp) : Math.floor(item.temp)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HourlyForecastCard;
