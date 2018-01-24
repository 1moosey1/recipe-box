import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { selectRecipeAction } from '../actions/actions';

const mapDispatchToProps = dispatch => (
  { handleSelect: id => () => dispatch(selectRecipeAction(id)) }
);

export default connect(null, mapDispatchToProps)(Recipe);
