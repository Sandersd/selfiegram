import * as types from './actionTypes'
import postApi from '../api/postApi';


//Load posts for Feed
export function loadPosts() {
  return function(dispatch) {
    return postApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts.reverse()));
    }).catch(error => {
      throw(error);
    });
  };
}

//Load users for Discover
export function loadDiscover() {
  return function(dispatch) {
    return postApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

//Load entire user object for profile info and posts for Profile
export function loadProfilePosts(userId) {
  return function(dispatch) {
    return postApi.getProfilePosts(userId).then(response => {
      dispatch(loadProfilePostsSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

//Send user input to create post from Post page
export function createPost(post) {
  return function (dispatch) {
    return postApi.createPost(post).then(responsePost => {
      dispatch(createPostSuccess(responsePost));
      return responsePost;
    }).catch(error => {
      throw(error);
    });
  };
}

//Combined post updater
export function likeUnlikePost(post, idx) {
  return function (dispatch) {
    return postApi.likeUnlikePost(post).then(response => {
      dispatch(likeUnlikePostSuccess(response, idx));
      return response;
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadProfilePostsSuccess(response) {
  return {type: types.LOAD_PROFILE_POSTS_SUCCESS, response};
}

export function createPostSuccess(post) {
  return {type: types.CREATE_POST_SUCCESS, post}
}

export function likeUnlikePostSuccess(post, idx) {
  return {type: types.LIKE_UNLIKE_POST_SUCCESS, post, idx}
}
