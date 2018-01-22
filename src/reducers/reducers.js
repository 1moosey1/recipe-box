const initialState = {

    recipes: [],
    selectedRecipe: null,
    dirtyRecipe: null,
    editing: false
};

export default (state = initialState, action) => {

    switch(action.type) {

        default:
            return state;
    }
}