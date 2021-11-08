import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import myCitiesReducer from './myCitiesReducer/myCitiesReducer';
import weatherReducer from './weatherReducer/weatherReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  cities: myCitiesReducer,
  weatherData: weatherReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer, composedEnhancer);
const f = () => {
  let store = createStore(persistedReducer, composedEnhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default f;
