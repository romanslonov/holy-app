import React from 'react';
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
    padding: '8px 16px',
    color: 'white',
    borderRadius: '3px',
    backgroundColor: '#5659f9',
  }
};

const Button = ({ classes, children }) => (
  <button className={classes.root}>{children}</button>
);

export default injectSheet(styles)(Button);
