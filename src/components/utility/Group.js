import React from 'react';
import PropTypes from 'prop-types';

const Group = props => (
  <div className={props.className}>
    { props.children }
  </div>
);

Group.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Group;
