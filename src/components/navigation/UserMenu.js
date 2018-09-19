import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../../Auth';

class UserMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.deauthenticateUser = this.deauthenticateUser.bind(this);
  }

  deauthenticateUser() {
    Auth.deauthenticateUser();
    const { router } = this.context;
    router.history.replace('/auth/login/');
  }

  render() {
    return (
      <div>
        <button type="button">UserName</button>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <button type="button" onClick={this.deauthenticateUser}>Logout</button>
      </div>
    );
  }
}

UserMenu.contextTypes = {
  router: PropTypes.object.isRequired,
};


export default UserMenu;
