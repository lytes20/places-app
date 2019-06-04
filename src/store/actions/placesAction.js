import { ADD_PLACE, SELECT_PLACE, UNSELECT_PLACE } from "./actionTypes";

/**
 * Action creator to handle adding a place
 * @param {string} placeName - String entered by the user in the place input
 * @returns {object}
 */
export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  };
};

/**
 * Action creator to handle place selection
 * @param {string} key - Unique string for each place object
 * @returns {object}
 */
export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    payload: key
  };
};

/**
 * Action creator to deselecting a place / closing of placeDetail model
 * @returns {object}
 */
export const deselectPlace = key => {
  return {
    type: UNSELECT_PLACE
  };
};
