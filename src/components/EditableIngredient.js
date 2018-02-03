import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './utility/TextInput';
import Button from './utility/Button';

const EditableIngredient = props => (
  <div>

    <TextInput onChange={props.onChange(props.index)}>
      {props.children}
    </TextInput>

    <Button onClick={props.onDelete(props.index)}>
      x
    </Button>

  </div>
);

EditableIngredient.propTypes = {
  children: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default EditableIngredient;
