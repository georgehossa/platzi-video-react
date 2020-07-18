import { SET_FAVORITE, REMOVE_FAVORITE, LOGIN_REQUEST } from '../types';

export const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload,
});

export const removeFavorite = payload => ({
  type: REMOVE_FAVORITE,
  payload,
});

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});
