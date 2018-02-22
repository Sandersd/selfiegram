import { combineReducers } from 'redux';
import posts from './postReducer';
import profile from './profileReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  posts,
  users,
  profile
})

export default rootReducer;
