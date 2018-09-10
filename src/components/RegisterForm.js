import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const RegisterForm = ({onSubmit, onChange, errors, user }) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div>
        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          onChange={onChange}
          value={user.name}
        />
        <div>{errors.name}</div>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          onChange={onChange}
          value={user.email}
        />
        <div>{errors.email}</div>
      </div>

      <div>
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

      <div>
        <button type="submit">Create New Account</button>
      </div>

      <div>Already have an account? <Link to={'/auth/login'}>Log in</Link></div>
    </form>
  </div>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default RegisterForm;
