import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';

const RegisterForm = ({
  onSubmit, onChange, errors, user,
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div>
        <Input
          id="name"
          required
          label="Name"
          name="name"
          onChange={onChange}
          value={user.name}
        />
        <div>{errors.name}</div>
      </div>

      <div>
        <Input
          id="email"
          required
          label="Email"
          name="email"
          onChange={onChange}
          value={user.email}
        />
        <div>{errors.email}</div>
      </div>

      <div>
        <Input
          id="password"
          required
          label="Password"
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}
        />
        <div>{errors.password}</div>
      </div>

      <div>
        <Button type="submit">Create New Account</Button>
      </div>

      <div>Already have an account? <Link to="/auth/login">Log in</Link></div>
    </form>
  </div>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default RegisterForm;
