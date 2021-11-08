const initialState = {
  weather: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload,
      };
    case 'SET_CITY':
      return {
        ...state,
        value: action.payload,
      };
    case 'SET_CURRENT_LOCATION_FORECAST':
      return {
        ...state,
        weather: action.payload,
      };
    case 'SET_DAILY_FORECAST':
      return {
        ...state,
        forecast: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
