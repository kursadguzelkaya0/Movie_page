import React, {Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { logout } from '../../store/actions/authActions';



const Logout = (props) => {
    
    return ( 
        <Fragment>
            <Link to={'/'}><button className='button' style={{margin: 'auto'}} onClick={ props.logout } href='#'>Logout</button></Link>
        </Fragment>
    )
    
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};


export default connect(null, { logout })(Logout);