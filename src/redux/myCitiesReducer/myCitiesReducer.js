const initialState = {
  myCities: [],
};

const myCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MY_CITY':
      const cities = state.myCities.filter((item) => item.value !== action.payload.value);
      return {
        ...state,
        myCities: [action.payload].concat(cities),
      };
    case 'REMOVE_CITY':
      return {
        ...state,
        myCities: state.myCities.filter((item) => item.value !== action.payload),
      };
    case 'GET_CITIES':
      return {
        ...state,
        myCities: action.payload,
      };
    case 'REFRESH_DATA':
      return {
        ...state,
        myCities: state.myCities.map((item) =>
          item.value === action.payload.name ? { ...item, weather: action.payload } : item,
        ),
      };
    default:
      return state;
  }
};

export default myCitiesReducer;
