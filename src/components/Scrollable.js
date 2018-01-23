import React from 'react';
import PropTypes from 'prop-types';

const Scrollable = props => {

    return(
        <div className="scrollable">
            {props.children}
        </div>
    );
};

Scrollable.propTypes = {

    children: PropTypes.oneOfType([

        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default Scrollable;