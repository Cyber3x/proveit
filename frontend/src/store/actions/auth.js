export const SET_LOGIN = 'SET_LOGIN';

export const setLogin = newLogin => {
  return {type: SET_LOGIN, newLogin: newLogin};
};
