import * as types from '../types';

export function clickButtonRequest() {
  return {
    type: types.BUTTON_DOWN_REQUEST,
  };
}

export function clickButtonSuccess() {
  return {
    type: types.BUTTON_DOWN_SUCCESS,
  };
}

export function clickButtonFailure() {
  return {
    type: types.BUTTON_DOWN_FAILURE,
  };
}
