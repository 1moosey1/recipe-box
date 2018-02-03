import React from 'react';
import PropTypes from 'prop-types';
import Header from './utility/Header';
import Scrollable from './utility/Scrollable';
import RecipeContainer from '../containers/RecipeC';
import AddRecipeContainer from '../containers/AddRecipeC';

const RecipeBox = (props) => {
  let { recipes } = props;

  recipes = recipes.map((recipe, index) => (
    <RecipeContainer key={recipe.name} id={index}>
      {recipe.name}
    </RecipeContainer>
  ));

  return (
    <div className="box">

      <Header>
        Recipes
      </Header>

      <Scrollable>
        {recipes}
      </Scrollable>

      <AddRecipeContainer />

    </div>
  );
};

RecipeBox.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string)
  })).isRequired
};

export default RecipeBox;
