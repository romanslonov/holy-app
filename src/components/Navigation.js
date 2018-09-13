import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Auth from '../Auth';

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);

    this.deauthenticateUser = this.deauthenticateUser.bind(this);
  }
  deauthenticateUser() {
    Auth.deauthenticateUser();
    this.context.router.history.replace('/auth/login/');
  }
  render() {
    return (
      <div>
        {Auth.isUserAuthenticated()
          ? <div>
              <button onClick={this.deauthenticateUser}>Logout</button>
              <Link to="/dashboard">Home</Link>
              <Link to="/dashboard/profile">Profile</Link>
            </div>
          : <Link to="/auth/login">Login</Link>
        }
      </div>
    )
  }
}

Navigation.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Navigation;
