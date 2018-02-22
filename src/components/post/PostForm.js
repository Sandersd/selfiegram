import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';

class PostForm extends Component {
  render() {
    return (
      <div>
        <form>
          <TextInput
            name="photo_url"
            label="Photo URL"
            value={this.props.post.photo_url}
            onChange={this.props.onChange}/>

          <TextInput
            name="caption"
            label="Caption"
            value={this.props.post.caption}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PostForm;
