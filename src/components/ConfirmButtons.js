import React from 'react';
import PropTypes from 'prop-types';
import Group from './utility/Group';
import Button from './utility/Button';

const ConfirmButtons = props => (
  <Group className="flex-bot-right">

    <Button className="btn" onClick={props.onCancel}>
      Cancel
    </Button>

    <Button className="btn" onClick={props.onSave}>
      Save
    </Button>

  </Group>
);

ConfirmButtons.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ConfirmButtons;
