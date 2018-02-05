import { connect } from 'react-redux';
import {editRecipeAction, removeRecipeAction} from '../actions/actions';
import EditButtons from '../components/EditButtons';

const mapDispatchToProps = dispatch => ({
  onDelete: () => dispatch(removeRecipeAction()),
  onEdit: () => dispatch(editRecipeAction())
});

export default connect(null, mapDispatchToProps)(EditButtons);
