import axios from 'axios';
import { API_URL, API_KEY } from '../../api';

export const addCity = (city) => ({
  type: 'ADD_MY_CITY',
  payload: city,
});

export const removeCity = (value) => ({
  type: 'REMOVE_CITY',
  payload: value,
});

export const refreshItem = (data) => ({
  type: 'REFRESH_DATA',
  payload: data,
});

export const refreshDataCurrentCity = (value) => (dispatch) => {
  axios.get(`${API_URL}/weather/?q=${value}&units=metric&appid=${API_KEY}`).then(({ data }) => {
    dispatch(refreshItem(data));
  });
};
