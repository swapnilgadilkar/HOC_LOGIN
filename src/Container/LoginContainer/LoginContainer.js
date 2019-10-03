import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Login from '../../Components/LoginComponents/LoginComponent';

import * as LoginActionCall from '../../action/LoginModule/loginAction';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        };
    }

    //Receive Data from reducer
    componentWillReceiveProps(nextProps) {
        if (nextProps.loginResult === 'unauthorized_user') {
            this.setState({ error: 'unauthorized_user' })
        }
        else {
            alert('Login success')
            this.setState({ error: '' })
            Actions.reset('EmployeeContainer');
        }
    }

    onPressLogin(username, password) {
        //Action call
        this.props.loginActionprops.Login(username, password);
    }

    render() {
        return (
            <Login
                onError={this.state.error}
                onPressLogin={this.onPressLogin.bind(this)}>
            </Login>
        );
    }
}

const mapStateToProps = (state) => ({
    loginResult: state.loginReducer
});

const mapDispatchToProps = (dispatch) => ({
    loginActionprops: bindActionCreators(LoginActionCall, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
