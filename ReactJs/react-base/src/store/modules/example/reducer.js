const initialState = {
  buttonDown: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BUTTON_DOWN': {
      const newState = { ...state };
      newState.buttonDown = !newState.buttonDown;

      return newState;
    }

    default:
      return state;
  }
};
