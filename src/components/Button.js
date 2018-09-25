import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  root: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: 'none',
    height: '32px',
    padding: '0 16px',
    color: 'white',
    borderRadius: '3px',
    backgroundColor: '#4f46ff',
  },
};

const Button = ({ classes, disabled, children, type }) => (
  <button
    type={type}
    disabled={disabled}
    className={classes.root}
  >
    {children}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};


export default injectSheet(styles)(Button);
