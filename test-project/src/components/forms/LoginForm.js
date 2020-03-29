import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InLineError from '../messages/InLineError';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        hidden: true,
        fontIcon: <FaRegEyeSlash />,
        loading: false,
        errors: {}
    };

    toggleShowPassword() {
        this.setState(state => ({
            hidden: !state.hidden,
            fontIcon: !state.hidden? <FaRegEyeSlash /> : <FaRegEye />
        }));
    }


    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors })

        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    }

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "can't be blank";
        return errors;
    }
    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
    render() {
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}>
                    </input>
                    {errors.email && <InLineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type={this.state.hidden ? "password" : "text"}
                        id="password"
                        name="password"
                        placeholder="Make it Secure"
                        value={data.password}
                        onChange={this.onChange}>
                    </input>
                    <label className="toogle-show-password" onClick={() => this.toggleShowPassword()}>{this.state.fontIcon}</label>
                    {errors.password && <InLineError text={errors.password} />}
                </Form.Field>
                <Button className="login-button" primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
};

export default LoginForm;