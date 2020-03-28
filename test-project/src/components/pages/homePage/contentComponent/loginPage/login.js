import React, { Component } from 'react';

import LoginForm from '../../../../forms/LoginForm';
import Logo from '../../../../../assets/images/login-logo.jpg';
import '../../../../../assets/css/login.min.css'

class Login extends Component {
    submit = data => {
        console.log(data);
        this.loginData(data)
    }

    loginData(data) {
        console.log('data');
        fetch('http://localhost:3000/get/accounts/' + data.email)
            .then(res => res.json())
            .then((logindata) => {
                if (logindata[0].password != null) {
                    if (logindata[0].password === data.password) {
                        this.setState({ login: logindata })
                        console.log(this.state);
                    } else {
                        console.log('wrong password');
                    }
                }

            })
        // .catch()
    }
    render() {
        return (
            <div className="login-body">
                <div className="login-content">
                    <div className="login-title">
                        <img src={Logo} alt="login" />
                        <h1>Login Page</h1>
                    </div>
                    <div className="login-form">
                        <LoginForm submit={this.submit} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
