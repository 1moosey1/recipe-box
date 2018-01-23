import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button className={props.className} onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
