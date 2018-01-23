import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {

    return(
        <h2>
            {props.children}
        </h2>
    );
};

Header.propTypes = {

    children: PropTypes.string.isRequired
};

export default Header;