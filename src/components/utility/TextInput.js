import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => (
  <input type="text" value={props.children} onChange={props.onChange} />
);

TextInput.propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
