import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { LoadingOutlined } from '@ant-design/icons';

import { API_KEY, API_URL } from '../api';
import CurrentWeather from '../components/CurrentWeather';
import Header from '../components/Header';
import CardBlock from '../components/CardBlock';
import SearchBlock from '../components/SearchBlock';
import { fetchWeather } from '../redux/weatherReducer/action';

function HomePage() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const { weatherData } = useSelector((obj) => obj);
  const dispatch = useDispatch();

  const geolocation = () => {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position.coords);
      });
    });
  };

  const handleAddMyCity = (obj) => {
    dispatch({
      type: 'ADD_MY_CITY',
      payload: obj,
    });
  };

  const debounce = useCallback(
    (func, delay) => {
      clearTimeout(debouncedValue);
      const t = setTimeout(func, delay);
      setDebouncedValue(t);
    },
    [debouncedValue],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { latitude, longitude } = await geolocation();
        const { data } = await axios.get(
          `${API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
        );
        setCurrentWeather(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    debounce(() => {
      if (!searchValue) return;
      dispatch(fetchWeather(searchValue));
    }, 1000);
  }, [dispatch, searchValue]);

  return (
    <div className="wrapper">
      <Header />
      {typeof currentWeather.main != 'undefined' ? (
        <CurrentWeather weatherInfo={currentWeather} />
      ) : (
        <div className="loading">
          <Dimmer active>
            <Loader>
              Loading..
              <LoadingOutlined />
            </Loader>
          </Dimmer>
        </div>
      )}
      <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} />
      {typeof weatherData.value !== 'undefined' && searchValue !== '' ? (
        <CardBlock item={weatherData} onClickAddCity={handleAddMyCity} />
      ) : (
        ''
      )}
    </div>
  );
}

export default HomePage;
