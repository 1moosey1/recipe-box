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

// Add new recipe to state
function recipeAdded(state, action) {
  const newRecipe = {
    name: action.recipe,
    ingredients: []
  };

  return Object.assign({}, state, {
    recipes: [...state.recipes, newRecipe],
    selectedRecipe: state.recipes.length,
    dirtyRecipe: null, // fix --------------------------------------------
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

// Recipe has been selected
function recipeSelected(state, action) {
  return Object.assign({}, state, {
    selectedRecipe: action.id,
    dirtyRecipe: null,
    editing: false
  });
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.ADD_RECIPE:
      return recipeAdded(state, action);

    case ActionTypes.REMOVE_RECIPE:
      return recipeRemoved(state);

    case ActionTypes.SELECT_RECIPE:
      return recipeSelected(state, action);

    default:
      return state;

  }
};
