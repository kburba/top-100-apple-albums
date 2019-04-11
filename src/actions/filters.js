export const setFilter = (filterType, filters) => dispatch => {
  const type = filterType === "year" ? "SET_YEAR_FILTER" : "SET_PRICE_FILTER";
  dispatch({
    type: type,
    payload: filters
  });
};
