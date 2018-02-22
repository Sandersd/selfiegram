import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as postActions from '../../actions/postActions';
import PostForm from './PostForm';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        photo_url: '',
        caption: '',
        is_liked: '',
        likes_count: '',
        author: ''
      },
      saving: false
    };
    this.savePost = this.savePost.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
  }

  //Update the post item in state when field is changed
  updatePostState(event) {
    const field = event.target.name;
    const post = this.state.post;
    post[field] = event.target.value;
    return this.setState({post: post});
  }

  //Save and create the post from state, load profile, and redirect to Profile page
  savePost(event) {
    event.preventDefault();
    this.props.doSavePost(this.state.post);
    this.props.doLoadProfilePosts(1);
    this.props.history.push('/profile/1')
  }

  render() {
    return (
      <div className="Post">
        <div className="col-md-12">
          <h1>New Post</h1>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <PostForm
              post={this.state.post}
              onSave={this.savePost}
              onChange={this.updatePostState}/>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}


Post.propTypes = {
  doSavePost: PropTypes.func.isRequired
};


function mapDispatchToProps(dispatch) {
  return {
    doSavePost: post => dispatch(postActions.createPost(post)),
    doLoadProfilePosts: userId => dispatch(postActions.loadProfilePosts(userId))
  };
}

export default withRouter(connect(false, mapDispatchToProps)(Post));
