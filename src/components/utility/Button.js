import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button className={props.className} onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Button;
