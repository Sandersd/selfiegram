import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

//Cheap way to convert handles to userId
//Used in Profile and SinglePost
export function userNameToId(userName) {
  switch (userName) {
    case "Animal":
      return 2
    case "Zoot":
      return 3
    case "Floyd Pepper":
      return 4
    default:
      return 1
  }
}

const MiniProfile = (props) => {
  return (
    <div className="miniProfile-container">
      <Image className="list-picture"
           src={props.photo}
           alt="Not found"
           circle />
      <h1>{props.handle}</h1>
      <span className="miniProfile-info">
        <h5>{props.post_count} posts</h5>
        <h5>{props.follower_count} followers</h5>
        <h5>{props.following_count} following</h5>
      </span>
    </div>
  );
};


MiniProfile.propTypes = {
  handle: PropTypes.string,
  photo: PropTypes.string,
};

export default MiniProfile;
