import React from 'react';
import { Link } from 'react-router-dom';
import { API_IMG } from '../api';

import Button from './Button';

function CardBlock({ item, onClickAddCity }) {
  const onAddCity = () => {
    onClickAddCity(item);
  };

  return (
    <div className="card">
      <div className="card-block">
        <div className="card-block__flex">
          <h3>{item.value}</h3>
          <img src={`${API_IMG}/${item.weather.weather[0].icon}.png`} alt="icon" />
          <p>{Math.floor(item.weather.main?.temp)}&deg;C</p>
          <div className="card-block__info">
            <span>{item.weather.wind?.speed} m/s</span>
            <span>{item.weather.main?.humidity} %</span>
            <span>{item.weather.main?.pressure} mm Hg</span>
          </div>
        </div>
        <Link to="/forecast">
          <Button>
            <span>SHOW FORECAST</span>
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
      </div>
      <svg
        onClick={onAddCity}
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#b2b2b2" />
        <path
          d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
          fill="#000"
        />
      </svg>
    </div>
  );
}

export default CardBlock;
