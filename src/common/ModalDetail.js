import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Modal } from 'react-bootstrap';

const ModalDetail = (props) => {
  return (
    <div>
      <Modal show={props.showModal} onHide={props.close}>
        <Modal.Body>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="list-picture-container"
                   onClick={props.close}>
                <Image className="list-picture"
                     src={props.post.photo_url}
                     alt="Not found" />
              </div>
              <hr />
              <div className="list-info-container">
                <Link to={`/user/${props.post.author}`}>
                  @{props.post.author}
                </Link>
                <h5 className="list-caption">{props.post.caption}</h5>
                <span className="list-likes-container">
                  {props.post.likes_count}
                  {props.post.likes_count === 1 ?
                    " Like"
                    : " Likes"
                  }
                </span>
              </div>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};


ModalDetail.propTypes = {
  post: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};

export default ModalDetail;
