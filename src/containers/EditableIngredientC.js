import { connect } from 'react-redux';
import { removeIngredientAction, editIngredientAction } from '../actions/actions';
import EditableIngredient from '../components/EditableIngredient';

const mapDispatchToProps = dispatch => ({
  onChange: ingredientId => (
    event => dispatch(editIngredientAction(event.target.value, ingredientId))
  ),
  onDelete: ingredientId => (
    () => dispatch(removeIngredientAction(ingredientId))
  )
});

export default connect(null, mapDispatchToProps)(EditableIngredient);
