import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as postActions from '../../actions/postActions';
import PostList from '../post-list/PostList';
import ModalDetail from '../../common/ModalDetail';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: {},
      showModal: false
    };

    this.handlePostClick = this.handlePostClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
    this.props.doLoadPosts();
    window.scrollTo(0, 0);
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
      <div className="Feed">
        <div className="col-md-12">
          <h1>Feed</h1>
          <div className="col-md-4"></div>
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


Feed.propTypes = {
  posts: PropTypes.array.isRequired,
  doLikeUnlikePost: PropTypes.func.isRequired,
  doLoadPosts: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doLikeUnlikePost: (post, idx) => dispatch(postActions.likeUnlikePost(post, idx)),
    doLoadPosts: () => dispatch(postActions.loadPosts())
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));
