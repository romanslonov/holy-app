import React from 'react';
import request from '../request';
import Auth from "../Auth";
import {Redirect} from "react-router-dom";

/**
 * Authorization High Order Component. Handles whether or not the user is allowed to see the page.
 *
 * @param WrappedComponent - Component needs to be rendered
 * @returns {Component}
 */

const Authorization = (WrappedComponent) => class WithAuthorization extends React.Component {
  /**
   * Get /api/v1/user each time component did mount in order to check that token is still valid
   * We can also check roles or permissions here
   */
  componentDidMount() {
    request('/user').then(response => response.json()).then(({user}) => user);
  }
  render() {
    return (
      Auth.isUserAuthenticated()
        ? <WrappedComponent {...this.props} />
        : <Redirect to={{ pathname: '/auth/login/', state: { from: this.props.location } }} />
    )
  }
};

export default Authorization;
