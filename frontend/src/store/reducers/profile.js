import { EDIT_PROFILE } from '../actions/profile';
import * as Sports from '../../constants/sports';

const initalState = {
  email: 'testemail@gmail.com',
  dob: '10.10.2002.',
  gender: 'Muško',
  favSport: Sports.FOOTBALL_NAME,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      let newState = { ...state };
      newState = action.newProfile;
      return newState;
    default:
      return state;
  }
};
