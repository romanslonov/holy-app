import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classnames from 'classnames';

const styles = {
  root: {
    textAlign: 'center',
    padding: '12px 0',
  },
  info: {
    backgroundColor: 'blue',
    color: 'white',
  },
  success: {
    backgroundColor: 'green',
    color: 'white',
  },
  error: {
    backgroundColor: 'red',
    color: 'white',
  },
};

const Toast = ({ classes, type, message }) => (
  <div className={classnames(classes.root, classes[type])}>{message}</div>
);

Toast.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.object.isRequired,
  message: PropTypes.string,
};

Toast.defaultProps = {
  type: 'info',
  message: 'Default message',
};


export default injectSheet(styles)(Toast);
