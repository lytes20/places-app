import { combineReducers } from "redux";
import placesReducer from "./placesReducer";

const allReducers = combineReducers({
  placesReducer: placesReducer
});

export default allReducers;
