import React from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/Button';
import { API_IMG } from '../api';
import { refreshDataCurrentCity, removeCity } from '../redux/myCitiesReducer/action';

function CitiesPage() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.myCities);

  const onRemoveItem = (value) => {
    if (window.confirm('Are you sure you want to delete the city?')) {
      dispatch(removeCity(value));
    }
  };

  const onRefreshItem = (value) => {
    dispatch(refreshDataCurrentCity(value));
  };

  return (
    <div className="wrapper">
      <div className="cities-page">
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
        {cities && cities.length !== 0 ? (
          cities.map((item) => (
            <div key={item.weather?.id} className="card">
              <div className="card-block">
                <div className="card-block__flex">
                  <h3>{item?.value}</h3>
                  <img src={`${API_IMG}/${item.weather.weather[0].icon}.png`} alt="icon" />
                  <p>{Math.floor(item.weather?.main?.temp)}&deg;C</p>
                  <div className="card-block__info">
                    <span>{item.weather?.wind?.speed} m/s</span>
                    <span>{item.weather?.main?.humidity}%</span>
                    <span>{item.weather?.main?.pressure} mm Hg</span>
                  </div>
                </div>
              </div>
              <SyncOutlined className="refresh" onClick={() => onRefreshItem(item.value)} />
              <DeleteOutlined onClick={() => onRemoveItem(item.value)} />
            </div>
          ))
        ) : (
          <div className="empty">
            <p>
              Oops!
              <br /> You don't have any saved cities yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CitiesPage;
