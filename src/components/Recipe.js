import React from 'react';
import PropTypes from 'prop-types';

const Recipe = props => {

    return (
        <div className="recipe" onClick={props.handleSelect}>
            {props.title}
        </div>
    );
};

Recipe.propTypes = {

    title: PropTypes.string.isRequired,
    handleSelect: PropTypes.func
};

export default Recipe;