import React from 'react';
import PropTypes from 'prop-types';
import SinglePost from './SinglePost';

const PostList = (props) => {
  //Dont show posts with no image (mistakes while testing API)
  const posts = props.posts.filter(post => post.photo_url);
  return (
    <div>
      {posts.map(post =>
        <SinglePost post={post}
                    key={post.id}
                    handlePostClick={props.handlePostClick}
                    handleLikeClick={props.handleLikeClick}/>
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  handlePostClick: PropTypes.func.isRequired,
  handleLikeClick: PropTypes.func.isRequired
};


export default PostList;
