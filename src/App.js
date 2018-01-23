import React from 'react';
import Header from './components/utility/Header';
import RecipeBoxContainer from './containers/RecipeBoxContainer';
import IngredientBox from './components/IngredientBox';

const App = () => (
  <div className="root">

    <Header>
      Custom Recipe Box
    </Header>

    <div className="app">
      <RecipeBoxContainer />
      <IngredientBox />
    </div>

    <footer>
      Code & Design by Juan Gonzalez
    </footer>

  </div>
);

export default App;
