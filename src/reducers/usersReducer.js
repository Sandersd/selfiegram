import * as types from '../actions/actionTypes';
import initialState from './initialState';

//Reducer for array of users on Discover page
export default function usersReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users
    default:
      return state;
  }
}
