const initialState = {

    recipes: [
        {
            name: "Lemon Pie",
            ingredients: ["lemons", "pie crust"]
        },
        {
            name: "Apple Pie",
            ingredients: ["apples", "pie crust"]
        }
    ],
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