import React from 'react';
import Scrollable from './utility/Scrollable';
import Recipe from './Recipe';
import Button from './utility/Button';

const RecipeBox = props => {

    return (
        <div className="box">

            <h2> Recipes </h2>

            <Scrollable>
                <Recipe title="Test Recipe"/>
                <Recipe title="Test Recipe"/>
            </Scrollable>

            <Button className="recipe-btn">
                + Recipe
            </Button>

        </div>
    );
};

export default RecipeBox;