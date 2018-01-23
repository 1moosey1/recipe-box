import React from 'react';
import Scrollable from './Scrollable';
import Recipe from './Recipe';

const RecipeBox = props => {

    return (
        <div className="recipe-box">

            <h2> Recipes </h2>
            <Scrollable>
                <Recipe title="Test Recipe"/>
                <Recipe title="Test Recipe"/>
            </Scrollable>
        </div>
    );
};

export default RecipeBox;