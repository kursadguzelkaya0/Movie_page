import React, {Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/actions/authActions';



const Logout = (props) => {
    
    return ( 
        <Fragment>
            <NavLink onClick={ props.logout } href='#'>Logout</NavLink>
        </Fragment>
    )
    
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};


export default connect(null, { logout })(Logout);