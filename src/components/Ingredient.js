import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = props => (
  <div className="ingredient">
    {props.children}
  </div>
);

Ingredient.propTypes = {
  children: PropTypes.string.isRequired
};

export default Ingredient;
