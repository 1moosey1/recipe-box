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
  selectedRecipe: null,
  dirtyRecipe: null,
  editing: false
};

function recipeSelected(state, action) {
  return Object.assign({}, state, {
    selectedRecipe: state.recipes[action.id],
    dirtyRecipe: null,
    editing: false
  });
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.SELECT_RECIPE:
      return recipeSelected(state, action);

    default:
      return state;

  }
};
