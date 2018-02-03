import { connect } from 'react-redux';
import { addRecipeAction } from '../actions/actions';
import AddRecipe from '../components/AddRecipe';

const mapDispatchToProps = dispatch => (
  { onClick: recipeName => dispatch(addRecipeAction(recipeName)) }
);

export default connect(null, mapDispatchToProps)(AddRecipe);
