import { SET_LOGIN } from '../actions/auth';

const initalState = {
  isLoggedIn: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      let newState = { ...state };
      newState.isLoggedIn = action.newLogin;
      return newState;
    default:
      return state;
  }
};
