import { all } from '@redux-saga/core/effects';
import loginSaga from './loginSaga';
import movieSaga from './movieSaga';

export function* rootSaga() {
  yield all([
      ...loginSaga,
      ...movieSaga,
  ]);
}