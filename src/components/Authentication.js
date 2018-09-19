import React from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../Auth';

/**
 * Authorization High Order Component. Handles whether or not the user is allowed to see the page.
 *
 * @param WrappedComponent - Component needs to be rendered
 * @returns {Component}
 */

const Authorization = WrappedComponent => class WithAuthorization extends React.Component {
  render() {
    const { location } = this.props;
    return (
      Auth.isUserAuthenticated()
        ? <WrappedComponent {...this.props} />
        : <Redirect to={{ pathname: '/auth/login/', state: { from: location } }} />
    );
  }
};

export default Authorization;
