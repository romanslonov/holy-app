import React from 'react';
import Auth from "../Auth";
import {Redirect} from "react-router-dom";

/**
 * Authorization High Order Component. Handles whether or not the user is allowed to see the page.
 *
 * @param WrappedComponent - Component needs to be rendered
 * @returns {Component}
 */

const Authorization = (WrappedComponent) => class WithAuthorization extends React.Component {
  render() {
    return (
      Auth.isUserAuthenticated()
        ? <WrappedComponent {...this.props} />
        : <Redirect to={{ pathname: '/auth/login/', state: { from: this.props.location } }} />
    )
  }
};

export default Authorization;
