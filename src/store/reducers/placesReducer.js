import {
  ADD_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE
} from "../actions/actionTypes";
import PlaceImage from "../../assets/images/paris.jpg";

// initial shared state
const initialState = { places: [], selectedPlace: null };

/**
 * Places Reduce function
 * Handles all the different cases of the places action type
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.payload,
          image: PlaceImage
        })
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.payload;
        })
      };
    case UNSELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default placesReducer;
