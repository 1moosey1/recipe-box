import { ActionTypes } from '../actions/actions';

const initialState = {
  recipes: [
    {
      name: 'Lemon Pie',
      ingredients: ['lemons', 'pie crust']
    },
    {
      name: 'Apple Pie',
      ingredients: ['apples', 'pie crust']
    }
  ],
  selectedRecipe: -1,
  dirtyRecipe: null,
  editing: false
};

// Add new recipe to recipes list
function recipeAdded(state, action) {
  const newRecipe = {
    name: action.recipe,
    ingredients: []
  };

  return Object.assign({}, state, {
    recipes: [...state.recipes, newRecipe],
    selectedRecipe: state.recipes.length,
    dirtyRecipe: Object.assign({}, newRecipe),
    editing: true
  });
}

// Delete selected recipe from recipes list
function recipeRemoved(state) {
  if (state.selectedRecipe >= 0) {
    state.recipes.splice(state.selectedRecipe, 1);
  }

  return Object.assign({}, state, {
    recipes: [...state.recipes],
    selectedRecipe: -1
  });
}

function recipeEdited(state) {
  return Object.assign({}, state, {
    dirtyRecipe: Object.assign({}, state.recipes[state.selectedRecipe]),
    editing: true
  });
}

// Recipe has been selected
function recipeSelected(state, action) {
  return Object.assign({}, state, {
    selectedRecipe: action.id,
    dirtyRecipe: null,
    editing: false
  });
}

// Ingredient removed from selected recipe
function ingredientRemoved(state, action) {
  state.dirtyRecipe.ingredients.splice(action.id, 1);
  return Object.assign({}, state, {
    dirtyRecipe: Object.assign({}, state.dirtyRecipe)
  });
}

// Ingredient edited from selected recipe
function ingredientEdited(state, action) {
  const { dirtyRecipe } = state.dirtyRecipe;
  dirtyRecipe.ingredients[action.id] = action.ingredient;
  return Object.assign({}, state, {
    dirtyRecipe: Object.assign({}, dirtyRecipe)
  });
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.ADD_RECIPE:
      return recipeAdded(state, action);

    case ActionTypes.REMOVE_RECIPE:
      return recipeRemoved(state);

    case ActionTypes.EDIT_RECIPE:
      return recipeEdited(state);

    case ActionTypes.SELECT_RECIPE:
      return recipeSelected(state, action);

    case ActionTypes.REMOVE_INGREDIENT:
      return ingredientRemoved(state, action);

    case ActionTypes.EDIT_INGREDIENT:
      return ingredientEdited(state, action);

    default:
      return state;

  }
};
