import React from 'react';
import PropTypes from 'prop-types';
import Scrollable from './utility/Scrollable';
import EditableIngredientContainer from '../containers/EditableIngredientC';

const EditableIngredients = (props) => {

  const ingredients = props.ingredients.map(ingredient => (
    <EditableIngredientContainer key={ingredient}>
      {ingredient}
    </EditableIngredientContainer>
  ));

  return (
    <Scrollable>
      {ingredients}
    </Scrollable>
  );
};

EditableIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default EditableIngredients;
