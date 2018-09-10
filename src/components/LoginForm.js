import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({onSubmit, onChange, errors, user}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="">
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          onChange={onChange}
          value={user.email}
        />
        <div>{errors.email}</div>
      </div>

      <div className="">
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}
        />
        <div>{errors.password}</div>
      </div>

      <div className="">
        <button type="submit">Log in</button>
      </div>

      <div>Don't have an account? <Link to={'/auth/register'}>Create one</Link>.</div>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
