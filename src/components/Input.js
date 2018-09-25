import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  input: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    height: '32px',
    padding: '0 8px',
  },
};

const Input = ({
  classes, id, name, label, type, onChange, placeholder, disabled, required,
}) => (
  <div className={classes.root}>
    <label className={classes.label} htmlFor={id}>{label}</label>
    <input
      required={required}
      name={name}
      className={classes.input}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
  disabled: false,
  required: false,
};

export default injectSheet(styles)(Input);
