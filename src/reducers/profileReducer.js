import * as types from '../actions/actionTypes';
import initialState from './initialState';

//Reducer for the posts and profile information on Profile
export default function profileReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_PROFILE_POSTS_SUCCESS:
      return {
        posts: action.response.posts.reverse(),
        handle: action.response.handle,
        follower_count: action.response.follower_count,
        following_count: action.response.following_count,
        is_followed: action.response.is_followed,
        photo: action.response.photo
      }
    //return array with liked/unliked post in same position to prevent page jumping
    case types.LIKE_UNLIKE_POST_SUCCESS:
      return {
        ...state,
        posts:  [
            ...state.posts.slice(0, action.idx),
            action.post,
            ...state.posts.slice(action.idx + 1)
          ]
      }
    default:
      return state;
  }
}
