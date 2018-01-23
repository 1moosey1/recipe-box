import React from 'react';
import Header from './components/utility/Header';
import RecipeBox from './components/RecipeBox';
import IngredientBox from './components/IngredientBox';

const App = props => {

    return (
        <div className="root">

            <Header>
               Custom Recipe Box
            </Header>

            <div className="app">
                <RecipeBox/>
                <IngredientBox/>
            </div>

            <footer>
                Code & Design by Juan Gonzalez
            </footer>
        </div>
    );
};

export default App;
