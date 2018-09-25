import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Auth from '../Auth';
import request from '../request';
import { setUser, authenticateUser } from '../actions';

/**
 * Authorization High Order Component. Handles whether or not the user is allowed to see the page.
 *
 * @param WrappedComponent – Component needs to be rendered
 * @param allowedRoles – Allowed users roles
 * @returns {Component}
 */

const Authorization = (WrappedComponent, allowedRoles = ['user', 'admin']) => class WithAuthorization extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false, user: {} };
  }

  componentWillMount() {
    this.setState({ loading: true });
    request('/profile/')
      .then(response => response.json())
      .then(({ profile: user }) => {
        const { onSetUser, onAuthenticateUser } = this.props;
        setTimeout(() => {
          onSetUser(user);
          onAuthenticateUser();
          this.setState({ loading: false });
        }, 400);
      });
  }

  render() {
    const { location, user } = this.props;
    const { loading } = this.state;
    const isUserAuthenticated = Auth.isUserAuthenticated();

    if (isUserAuthenticated) {
      if (loading) {
        return <div>App is loading...</div>;
      }
      if (!allowedRoles.includes(user.role)) {
        return <Redirect to="/" />;
      }
      return user.isActivated
        ? <WrappedComponent user={user} {...this.props} />
        : <Redirect to={{ pathname: '/workspaces/create/', state: { from: location } }} />;
    }

    return <Redirect to={{ pathname: '/auth/login/', state: { from: location } }} />;
  }
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  onSetUser: (user) => {
    dispatch(setUser(user));
  },
  onAuthenticateUser: () => {
    dispatch(authenticateUser());
  },
});

const composedAuthorization = compose(
  connect(mapStateToProps, mapDispatchToProps),
  Authorization,
);

export default composedAuthorization;
