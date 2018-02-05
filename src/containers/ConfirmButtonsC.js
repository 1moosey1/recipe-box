import { connect } from 'react-redux';
import { cancelRecipeAction, saveRecipeAction } from '../actions/actions';
import ConfirmButtons from '../components/ConfirmButtons';

const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(cancelRecipeAction()),
  onSave: () => dispatch(saveRecipeAction())
});

export default connect(null, mapDispatchToProps)(ConfirmButtons);
