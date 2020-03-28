import React, { Component } from 'react';
import RegisterForm from '../../../../forms/registerForm';
import '../../../../../assets/css/register.min.css'
class Register extends Component {
    constructor() {
        super();
        this.state = {
            response: {},
            registerStatus: {
                message: '',
                status: false
            }
        }
    }
    submit = data => {
        this.registerData(data);
    }
    registerData(data) {
        fetch('http://localhost:3000/posts/accounts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ response: data })
                console.log(this.state.response.status);
                if (this.state.response.status != null) {
                    this.setState({ registerStatus: { message: 'Email already taken', status: true } })
                    console.log(this.state.registerStatus.status);
                    console.log(this.submit);
                }
            })
    }





    render() {

        return (
            <div className="register-body">
                <div className="register-content">
                    <div className="register-title">
                        <h1>Register Page</h1>
                        <div>{this.state.registerStatus.status}</div>
                        {this.state.registerStatus.status ? (<div> {this.state.registerStatus.message}</div>) : (<div></div>)}
                    </div>
                    <div className="register-form">
                        <RegisterForm submit={this.submit} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;
