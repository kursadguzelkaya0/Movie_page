import React, {Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container     
} from 'reactstrap';
import RegisterModal from '../Auth/RegisterModal';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class AppNavbar extends Component{
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    

    render(){
        const { isAuthenticated, user } = this.props.auth;
        const { history } = this.props.movie;
        
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <Login history={history} />
                </NavItem>
                <NavItem>
                    <RegisterModal />
                </NavItem>
            </Fragment>
        );
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{ user ? user.name : null }</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        )
        return ( 
            <div>
                <Navbar color="none" dark expand='sm' >
                    <Container>
                        <NavbarBrand href="/">MovieBest</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authLinks : guestLinks }
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    movie: state.movie
});

export default connect(mapStateToProps, null)(AppNavbar);