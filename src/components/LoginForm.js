import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

const LoginForm = ({
  onSubmit, onChange, errors, user,
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="">
        <Input
          id="email"
          label="Email"
          required
          name="email"
          onChange={onChange}
          value={user.email}
        />
        <div>{errors.email}</div>
      </div>

      <div className="">
        <Input
          id="password"
          label="Password"
          required
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}
        />
        <div>{errors.password}</div>
      </div>

      <div className="">
        <Button type="submit" variant="primary">Log in</Button>
      </div>

      <div>
        Dont have an account?
        <Link to="/auth/register">Create one</Link>
        .
      </div>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default LoginForm;
