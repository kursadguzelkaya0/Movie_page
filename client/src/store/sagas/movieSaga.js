import { takeEvery, call, put, } from '@redux-saga/core/effects';
import { GET_MOVIES, MOVIES_LOAD_SUCCESS, MOVIES_LOAD_FAIL } from '../actions/types';
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f9e274276050bf3ab215535300d9eb1e';
const query = 'avengers'

export function* fetchMovies(query) {
    try {
        const result = yield call(axios, `${API_URL}search/movie?api_key=${ API_KEY }&language=en-US&query=${ query }&page=1&include_adult=false`);
        yield put({type: MOVIES_LOAD_SUCCESS, payload: result.data.results});
    } catch (error) {
        yield put({type: MOVIES_LOAD_FAIL, payload: error});
        console.error(error.message);
    }
}

export function* getMovies(action) {
    yield call(fetchMovies, action.payload);
}

const movieSaga = [
    takeEvery(GET_MOVIES, getMovies),
];

export default movieSaga;