import { connect } from 'react-redux';
import { selectRecipeAction } from '../actions/actions';
import Recipe from '../components/Recipe';

const mapDispatchToProps = dispatch => (
  { handleSelect: id => () => dispatch(selectRecipeAction(id)) }
);

export default connect(null, mapDispatchToProps)(Recipe);
