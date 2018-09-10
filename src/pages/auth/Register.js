import React, {Component} from 'react';
import RegisterForm from '../../components/RegisterForm';
import request from "../../request";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  submitForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    request('/auth/register', {
      method: 'POST',
      hasToken: false,
      fullPath: true,
      body: JSON.stringify(this.state.user),
    });
  }

  render() {
    return (
      <div className="container text-align-center">
        <h1>Sign Up</h1>
        <RegisterForm
          onSubmit={this.submitForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    )
  }
}

export default RegisterPage;
