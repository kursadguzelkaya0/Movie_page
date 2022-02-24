import {GET_MOVIES, MOVIES_LOAD_FAIL, MOVIES_LOAD_SUCCESS, UPDATE_HISTORY} from './types';

export const getMovies = (query) => ({ type: GET_MOVIES, payload: query })

export const loadMovieSuccess = (movies) => ({ type: MOVIES_LOAD_SUCCESS, payload: movies })

export const loadMovieFail = (error) => ({ type: MOVIES_LOAD_FAIL, payload: error })

export const updateHistory = (history) => ({ type: UPDATE_HISTORY, payload: history })

