import { call, put, all, takeLatest } from 'redux-saga/effects';
import notify from '../../../config/notify';

import * as actions from './actions';
import * as types from '../types';

const request = () =>
  // eslint-disable-next-line
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.clickButtonSuccess());
  } catch (e) {
    notify({ msg: 'An error has ocurred', id: 'error' });
    yield put(actions.clickButtonFailure());
  }
}

export default all([takeLatest(types.BUTTON_DOWN_REQUEST, exampleRequest)]);
