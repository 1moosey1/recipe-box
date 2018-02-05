import { connect } from 'react-redux';
import IngredientBox from '../components/IngredientBox';

const mapStateToProps = (state) => {
  let recipeToDisplay;
  if (state.editing) {
    recipeToDisplay = state.dirtyRecipe;
  } else {
    recipeToDisplay = state.recipes[state.selectedRecipe];
  }

  return {
    recipe: recipeToDisplay,
    editing: state.editing
  };
};

export default connect(mapStateToProps)(IngredientBox);
