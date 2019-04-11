export const setAlbums = albums => dispatch => {
  dispatch({ type: "SET_ALBUMS", payload: albums });
};
