const initialState = {
  price: [],
  year: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRICE_FILTER":
      return {
        ...state,
        price: action.payload
      };
    case "SET_YEAR_FILTER":
      return {
        ...state,
        year: action.payload
      };
    default:
      return state;
  }
};
