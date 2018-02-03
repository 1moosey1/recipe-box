import React from 'react';
import Header from './components/utility/Header';
import RecipeBoxContainer from './containers/RecipeBoxC';
import IngredientBoxContainer from './containers/IngredientBoxC';

const App = () => (
  <div className="root">

    <Header>
      Custom Recipe Box
    </Header>

    <div className="app">
      <RecipeBoxContainer />
      <IngredientBoxContainer />
    </div>

    <footer>
      Code & Design by Juan Gonzalez
    </footer>

  </div>
);

export default App;
