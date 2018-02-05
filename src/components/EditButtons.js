import React from 'react';
import PropTypes from 'prop-types';
import Group from './utility/Group';
import Button from './utility/Button';

const EditButtons = props => (
  <Group className="flex-bot-right">

    <Button className="btn" onClick={props.onDelete}>
      Delete
    </Button>

    <Button className="btn" onClick={props.onEdit}>
      Edit
    </Button>

  </Group>
);

EditButtons.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default EditButtons;
