import * as types from '../types';

const initialState = {
  buttonDown: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BUTTON_DOWN_SUCCESS: {
      const newState = { ...state };
      newState.buttonDown = !newState.buttonDown;

      console.log('Success');

      return newState;
    }

    case types.BUTTON_DOWN_FAILURE: {
      console.log('An error has ocurred :<');

      return state;
    }

    case types.BUTTON_DOWN_REQUEST: {
      console.log('Making the request');
      return state;
    }

    default:
      return state;
  }
};
