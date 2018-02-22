import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userNameToId } from '../../common/MiniProfile';
import { Button, Glyphicon, Image } from 'react-bootstrap';


const SinglePost = ({ post, handlePostClick, handleLikeClick }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="list-picture-container"
             onClick={handlePostClick}
             id={post.id}>
          <Image className="list-picture"
               src={post.photo_url}
               alt="Not found" />
        </div>
        <hr />
        <div className="list-info-container">
          <Link to={`/profile/${userNameToId(post.author)}`}>
            @{post.author}
          </Link>
          <h5 className="list-caption">{post.caption}</h5>
          <span className="list-likes-container">
            <Button
              id={post.id}
              onClick={handleLikeClick}>
              {post.is_liked ?
                <Glyphicon glyph="heart" />
                : <Glyphicon glyph="heart-empty" />
              }
            </Button>
          </span>
        </div>
      </li>
    </ul>
  );
};


SinglePost.propTypes = {
  post: PropTypes.object.isRequired,
  handlePostClick: PropTypes.func.isRequired,
  handleLikeClick: PropTypes.func.isRequired
};

export default SinglePost;
