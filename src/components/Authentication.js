import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Auth from '../Auth';
import { fetchProfile } from '../actions';

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

  componentDidMount() {
    const { isAuthenticated, isFetched, onFetchProfile } = this.props;

    if (isAuthenticated && !isFetched) {
      this.setState({ loading: true });
      onFetchProfile().then(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { location, user, isFetched } = this.props;
    const { loading } = this.state;
    const isUserAuthenticated = Auth.isUserAuthenticated();

    if (isUserAuthenticated) {
      if (loading || !isFetched) {
        return <div>App is loading...</div>;
      }
      if (!allowedRoles.includes(user.role)) {
        return <Redirect to="/" />;
      }
      return <WrappedComponent user={user} {...this.props} />;
    }

    return <Redirect to={{ pathname: '/auth/login/', state: { from: location } }} />;
  }
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isFetched: state.auth.isFetched,
});

const mapDispatchToProps = dispatch => ({
  onFetchProfile: () => dispatch(fetchProfile()),
});

const composedAuthorization = compose(
  connect(mapStateToProps, mapDispatchToProps),
  Authorization,
);

export default composedAuthorization;
