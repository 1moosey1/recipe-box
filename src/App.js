import React from 'react';
import RecipeBox from './components/RecipeBox';

const App = props => {

    return (
        <div className="root">

            <div className="app">
                <RecipeBox/>
            </div>

            <footer>
                Code & Design by Juan Gonzalez
            </footer>
        </div>
    );
};

export default App;
