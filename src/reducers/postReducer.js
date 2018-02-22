import * as types from '../actions/actionTypes';
import initialState from './initialState';

//Reducer for the posts on the feed (main page)
export default function postReducer(state = initialState.posts, action) {
  switch(action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts
    case types.CREATE_POST_SUCCESS:
      return []
    //return array with liked/unliked post in same position to prevent page jumping
    case types.LIKE_UNLIKE_POST_SUCCESS:
      return [
        ...state.slice(0, action.idx),
        action.post,
        ...state.slice(action.idx + 1)
      ]
    default:
      return state;
  }
}
