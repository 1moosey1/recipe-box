import React from 'react';
import PropTypes from 'prop-types';

const Recipe = (props) => {
  const handleSelect = props.handleSelect(props.id);

  return (
    <div className="recipe" onClick={handleSelect}>
      {props.children}
    </div>
  );
};

Recipe.propTypes = {
  children: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Recipe;
