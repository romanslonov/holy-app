import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../../components/LoginForm';
import Auth from '../../Auth';
import request from '../../request';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
      },
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  componentDidMount() {
    if (Auth.isUserAuthenticated()) {
      const { router } = this.context;
      router.history.replace('/');
    }
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  submitForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const { user } = this.state;

    request('http://localhost:9000/auth/login/', {
      method: 'POST',
      hasToken: false,
      fullPath: true,
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(({ token }) => {
        Auth.authenticateUser(token);
        const { router } = this.context;
        const locationState = router.route.location.state;
        const cameFromPath = locationState ? locationState.from : '/';
        router.history.replace(cameFromPath);
      });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const { user } = this.state;
    user[field] = event.target.value;

    this.setState({ user });
  }

  render() {
    const { errors, user } = this.state;
    return (
      <div className="container text-align-center">
        <h1>Login</h1>
        <SignInForm
          onSubmit={this.submitForm}
          onChange={this.changeUser}
          errors={errors}
          user={user}
        />
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default LoginPage;
