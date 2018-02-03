import React from 'react';
import PropTypes from 'prop-types';
import Header from './utility/Header';
import Ingredients from './Ingredients';
import EditButtonsContainer from '../containers/EditButtonsC';

const IngredientBox = (props) => {

  const { recipe } = props;
  const header = typeof recipe !== 'undefined' ? recipe.name : 'Select a Recipe';
  const ingredients = typeof recipe !== 'undefined' ? recipe.ingredients : [];

  return (
    <div className="box">

      <Header>
        {header}
      </Header>

      <Ingredients ingredients={ingredients} />

      <EditButtonsContainer />

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
