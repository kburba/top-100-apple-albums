import { combineReducers } from "redux";
import albumsReducer from "./albums";
import filtersReducer from "./filters";

export default combineReducers({
  albums: albumsReducer,
  filters: filtersReducer
});
