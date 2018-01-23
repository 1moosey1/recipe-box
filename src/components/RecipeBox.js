import React from 'react';
import Scrollable from './Scrollable';
import Recipe from './Recipe';
import Button from './Button';

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