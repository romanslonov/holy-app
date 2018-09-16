import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px 16px',
  },
};

const Input = props => (
  <div className={props.classes.root}>
    <label className={props.classes.label} htmlFor={props.id}>{props.label}</label>
    <input className={props.classes.input} {...props}>{props.children}</input>
  </div>
);

export default injectSheet(styles)(Input);
