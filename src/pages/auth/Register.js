import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from '../../components/RegisterForm';
import Auth from '../../Auth';
import { register } from '../../actions';

class RegisterPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
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

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  submitForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const { user } = this.state;
    const { router } = this.context;
    const { onRegister } = this.props;

    onRegister(user).then(() => router.history.replace('/'));
  }

  render() {
    const { errors, user } = this.state;
    return (
      <RegisterForm
        onSubmit={this.submitForm}
        onChange={this.changeUser}
        errors={errors}
        user={user}
      />
    );
  }
}

RegisterPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

RegisterPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default connect(null, ({ onRegister: register }))(RegisterPage);
