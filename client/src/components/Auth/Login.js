import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/authActions';
import { clearErrors } from '../../store/actions/errorActions';

class LoginModal extends Component {
    state = {
        modal: false,
        name:'',
        email:'',
        password:'',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error.msg !== prevProps.error.msg) {
            
            // Check for the register fail
            if (error.id === "LOGIN_FAIL") {
                this.setState({ msg: error.msg.msg });
            }else {
                this.setState({ msg: null });
            };
        };

        // If authenticated close the modal
        if(this.state.modal) {
            if(isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        const {history}  = this.props;
        const { email, password } = this.state;

        const user = { email, password, history };

        // Attempt to login
        this.props.login(user);

    }

    render() {
        return(
            <div className="open-modal">
                <NavLink onClick={this.toggle} href='#' > Sign In </NavLink>
                
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >
                        User Sign In
                    </ModalHeader>
                    <ModalBody>
                        { this.state.msg ? <Alert color='danger'>{ this.state.msg }</Alert> : null }
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>

                                <Label for='email'>Email</Label>
                                <Input 
                                    type='text' 
                                    name='email'
                                    id='email'
                                    placeholder= 'Email'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='password'>Password</Label>
                                <Input 
                                    type='password' 
                                    name='password'
                                    id='password'
                                    placeholder= 'Password'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Button 
                                    color='dark'
                                    style={{marginTop: '2rem'}}
                                    block
                                >Sign In</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);