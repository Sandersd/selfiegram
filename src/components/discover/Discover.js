import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as postActions from '../../actions/postActions';
import MiniProfile from '../../common/MiniProfile';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.props.doLoadDiscover();
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div className="Discover">
        <div className="col-md-12">
          <h1>Discover</h1>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {this.props.users.map(user =>
              <Link to={`/profile/${user.id}`} key={user.id}>
                <MiniProfile
                  handle={user.handle}
                  follower_count={user.follower_count}
                  following_count={user.following_count}
                  photo={user.photo}>
                </MiniProfile>
              </Link>
            )}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}


Discover.propTypes = {
  users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doLoadDiscover: () => dispatch(postActions.loadDiscover())
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Discover));
