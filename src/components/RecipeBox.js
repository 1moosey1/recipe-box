import React from 'react';
import PropTypes from 'prop-types';
import Header from './utility/Header';
import Scrollable from './utility/Scrollable';
import Recipe from './Recipe';
import Button from './utility/Button';

const RecipeBox = (props) => {
  let { recipes } = props;
  recipes = recipes.map((recipe, index) => {

    return (
      <Recipe key={recipe.name} id={index}>
        {recipe.name}
      </Recipe>
    );
  });

  return (
    <div className="box">

      <Header>
        Recipes
      </Header>

      <Scrollable>
        {recipes}
      </Scrollable>

      <Button className="recipe-btn">
        + Recipe
      </Button>

    </div>
  );
};

RecipeBox.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
};

export default RecipeBox;
