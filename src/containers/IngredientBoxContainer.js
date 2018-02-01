import { connect } from 'react-redux';
import IngredientBox from '../components/IngredientBox';

const mapStateToProps = state => (
  { recipe: state.recipes[state.selectedRecipe] }
);

export default connect(mapStateToProps)(IngredientBox);
