import React from 'react';
import PropTypes from 'prop-types';
import Header from './utility/Header';
import Scrollable from './utility/Scrollable';
import Ingredient from './Ingredient';

const IngredientBox = (props) => {

  const { recipe } = props;
  let header = 'Select a Recipe';
  let ingredients = [];

  if (recipe) {
    header = recipe.name;
    ingredients = recipe.ingredients.map(ingredient => (
      <Ingredient key={ingredient}>
        {ingredient}
      </Ingredient>
    ));
  }

  return (
    <div className="box">

      <Header>
        {header}
      </Header>

      <Scrollable>
        {ingredients}
      </Scrollable>

    </div>
  );
};

IngredientBox.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string)
  })
};

export default IngredientBox;
