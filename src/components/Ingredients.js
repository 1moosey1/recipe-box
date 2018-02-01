import React from 'react';
import PropTypes from 'prop-types';
import Scrollable from './utility/Scrollable';
import Ingredient from './Ingredient';

const Ingredients = (props) => {

  const ingredients = props.ingredients.map(ingredient => (
    <Ingredient key={ingredient}>
      {ingredient}
    </Ingredient>
  ));

  return (
    <Scrollable>
      {ingredients}
    </Scrollable>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Ingredients;
