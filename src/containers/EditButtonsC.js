import { connect } from 'react-redux';
import {editRecipeAction, removeRecipeAction} from '../actions/actions';
import EditButtons from '../components/EditButtons';

const mapDispatchToProps = dispatch => ({
  handleDelete: () => dispatch(removeRecipeAction()),
  handleEdit: () => dispatch(editRecipeAction())
});

export default connect(null, mapDispatchToProps)(EditButtons);
