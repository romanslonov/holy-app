import React from 'react';

const Input = props => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input {...props}>{props.children}</input>
  </div>
);

export default Input;
