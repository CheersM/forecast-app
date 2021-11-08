const initialState = {
  myCities: [],
};

const myCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MY_CITY':
      const newCity = state.myCities.filter(
        (item, index) => index === state.myCities.indexOf(item),
      );
      return {
        ...state,
        myCities: [action.payload].concat(newCity),
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
          item.value === action.payload.value ? action.payload : item,
        ),
      };
    default:
      return state;
  }
};

export default myCitiesReducer;
