import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userNameToId } from '../../common/MiniProfile';
import * as postActions from '../../actions/postActions';
import PostList from '../post-list/PostList';
import ModalDetail from '../../common/ModalDetail';
import MiniProfile from '../../common/MiniProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPost: {},
      showModal: false,
      handle: '',
      follower_count: '',
      following_count: '',
      photo: ''
    };

    this.handlePostClick = this.handlePostClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
    //Check for handle url param and convert it to Id
    let userId = this.props.match.params.userId;
    if (userId.length !== 1 ) {
      userId = userNameToId(userId);
    }
    this.props.doLoadProfilePosts(userId);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      let userId = nextProps.match.params.userId;
      if (userId.length !== 1 ) {
        userId = userNameToId(userId);
      }
      this.props.doLoadProfilePosts(userId);
    }
  }

  //Fix for window not scrolling bug in React Router
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  close() {
    this.setState({ showModal: false });
  }


  //Show ModalDetail with clicked post, pass down to stateless components
  handlePostClick(event) {
    const posts = this.props.posts;
    const postId = event.currentTarget.id;
    const idx = posts.findIndex(post => post.id === postId);
    this.setState({
      showModal: true,
      selectedPost: posts[idx]
    });
  }


  handleLikeClick(event) {
    //Update post with like/unlike
    const posts = this.props.posts;
    const postId = event.currentTarget.id;
    const idx = posts.findIndex(post => post.id === postId);
    this.props.doLikeUnlikePost(posts[idx], idx);
  }

  render() {
    return(
      <div className="Profile">
        <div className="col-md-12">
          <div className="col-md-4">
            <MiniProfile
              handle={this.props.handle}
              post_count={this.props.posts.filter(post => post.photo_url).length}
              follower_count={this.props.follower_count}
              following_count={this.props.following_count}
              photo={this.props.photo}>
            </MiniProfile>
          </div>
          <div className="col-md-4">
            <ModalDetail
              post={this.state.selectedPost}
              showModal={this.state.showModal}
              close={this.close}/>
            <PostList
              posts={this.props.posts}
              handlePostClick={this.handlePostClick}
              handleLikeClick={this.handleLikeClick}/>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}


Profile.propTypes = {
  posts: PropTypes.array.isRequired,
  handle: PropTypes.string,
  photo: PropTypes.string,
  doLikeUnlikePost: PropTypes.func.isRequired,
  doLoadProfilePosts: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.profile.posts,
    handle: state.profile.handle,
    follower_count: state.profile.follower_count,
    following_count: state.profile.following_count,
    photo: state.profile.photo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doLikeUnlikePost: (post, idx) => dispatch(postActions.likeUnlikePost(post, idx)),
    doLoadProfilePosts: userId => dispatch(postActions.loadProfilePosts(userId))
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
