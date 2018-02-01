import React from 'react';
import PropTypes from 'prop-types';
import Group from './utility/Group';
import Button from './utility/Button';

const EditButtons = props => (

  <Group className="flex-bot-right">

    <Button className="btn" onClick={props.handleDelete}>
      Delete
    </Button>

    <Button className="btn" onClick={props.handleEdit}>
      Edit
    </Button>

  </Group>
);

EditButtons.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};

export default EditButtons;
