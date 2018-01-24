import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipeAction } from '../actions/actions';
import Button from '../components/utility/Button';

const AddRecipeBtn = props => (
  <Button className={props.className} onClick={props.onClick}>
    {props.children}
  </Button>
);

AddRecipeBtn.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

const mapDispatchToProps = dispatch => (
  { onClick: () => dispatch(addRecipeAction(prompt('Enter Recipe Name:'))) }
);

export default connect(null, mapDispatchToProps)(AddRecipeBtn);
