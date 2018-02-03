import { connect } from 'react-redux';
import RecipeBox from '../components/RecipeBox';

const mapStateToProps = state => (
  { recipes: state.recipes }
);

export default connect(mapStateToProps)(RecipeBox);
