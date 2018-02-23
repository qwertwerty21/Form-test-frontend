import { GET_USER_ID_SUCCESS } from '../constants';

const INITIAL_STATE = {
  userID: null
};

export default function(state = INITIAL_STATE, action) {
  console.log('HERES THE INITIAL_STATE IN user REDUCER', INITIAL_STATE);
  console.log('got a user  action', action);

  let error;

  switch (action.type) {
    case GET_USER_ID_SUCCESS:
      return Object.assign({}, state, {
        userID: action.payload
      });

    default:
      return state;
  }
} //end export default func
