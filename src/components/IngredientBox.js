import React from 'react';
import Header from './utility/Header';
import Scrollable from './utility/Scrollable';

const IngredientBox = props => {

    return(
        <div className="box">

            <Header>
                Select a Recipe
            </Header>

            <Scrollable>
            </Scrollable>

        </div>
    );
};

export default IngredientBox;