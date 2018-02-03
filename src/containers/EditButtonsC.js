import { connect } from 'react-redux';
import { removeRecipeAction } from '../actions/actions';
import EditButtons from '../components/EditButtons';

const mapDispatchToProps = dispatch => ({
  handleDelete: () => dispatch(removeRecipeAction())
});

export default connect(null, mapDispatchToProps)(EditButtons);
