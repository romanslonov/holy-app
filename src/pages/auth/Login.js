import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../../components/LoginForm';
import Auth from '../../Auth';
import request from "../../request";

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
  componentDidMount() {
    if (Auth.isUserAuthenticated()) {
      this.context.router.history.replace('/');
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

    request('/auth/login', {
      method: 'POST',
      hasToken: false,
      fullPath: true,
      body: JSON.stringify(this.state.user),
    })
      .then(response=> response.json())
      .then(({token}) => {
        Auth.authenticateUser(token);
        this.context.router.history.replace('/');
      });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
  }

  render() {
    return (
      <div className="container text-align-center">
        <h1>Sign In</h1>
        <SignInForm
          onSubmit={this.submitForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    )
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
