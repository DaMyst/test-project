import React, { Component } from 'react';

import LoginForm from '../../../../forms/LoginForm';
import Logo from '../../../../../assets/images/login-logo.jpg';
import '../../../../../assets/css/login.min.css'
import {
    Redirect
} from 'react-router-dom';

class Login extends Component {
    submit = data => {
        console.log(data);
        this.loginData(data)
    }
   state = {
    redirectTo: false
    }

    loginData(data) {
        console.log(data);
        fetch('http://localhost:3000/get/accounts/' + data.email)
            .then(res => res.json())
            .then((logindata) => {
                if (logindata[0].password != null) {
                    if (logindata[0].password === data.password) {
                        this.setState({ login: logindata, redirectTo: true })
                        const { login } = this.state;
                        if (login != null) {
                            const { password } = login[0];
                            if (data.password === password) {
                                console.log('password correct')
                            }

                        }
                    } else {

                        console.log('wrong password');
                    }
                }

            })
        // .catch()
    }
    render() {
        if (this.state.redirectTo != null) {
            if (this.state.redirectTo === true) {
                return (<Redirect to='/dashboard' />)

            } else {
                return (
                    // <Redirect to='/dashboard' ></Redirect>

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
        } else {
            return (
                // <Redirect to='/dashboard' ></Redirect>

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

}

export default Login;
