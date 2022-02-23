import { takeEvery, call, put } from '@redux-saga/core/effects';
import { push } from 'react-router-redux';
import { REDIRECT_TO_HOME } from "../actions/types";

export function* login({payload: history}) {
  console.log(history);
  history("/home");
}

const loginSaga = [
  takeEvery(REDIRECT_TO_HOME, login),
];

export default loginSaga;