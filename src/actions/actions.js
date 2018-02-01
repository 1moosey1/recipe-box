// Actions Types
export const ActionTypes = {
  ADD_RECIPE: 'ADD_RECIPE',
  REMOVE_RECIPE: 'REMOVE_RECIPE',
  EDIT_RECIPE: 'EDIT_RECIPE',
  SAVE_RECIPE: 'SAVE_RECIPE',
  SELECT_RECIPE: 'SELECT_RECIPE',
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
  EDIT_INGREDIENT: 'EDIT_INGREDIENT'
};

// Actions Creators
export function addRecipeAction(recipeName) {
  return {
    type: ActionTypes.ADD_RECIPE,
    recipe: recipeName
  };
}

export function removeRecipeAction() {
  return {
    type: ActionTypes.REMOVE_RECIPE
  };
}

export function selectRecipeAction(recipeId) {
  return {
    type: ActionTypes.SELECT_RECIPE,
    id: recipeId
  };
}
