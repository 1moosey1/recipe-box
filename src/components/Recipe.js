import React from 'react';
import PropTypes from 'prop-types';

const Recipe = props => {

    return (
        <div className="recipe" onClick={props.handleSelect}>
            {props.children}
        </div>
    );
};

Recipe.propTypes = {

    children: PropTypes.string.isRequired,
    handleSelect: PropTypes.func,
    id: PropTypes.number
};

export default Recipe;