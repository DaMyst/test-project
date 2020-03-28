import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InLineError from '../messages/InLineError';

class RegisterForm extends React.Component {
    state = {
        data: {
            name: '',
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors })

        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.name) errors.name = "can't be blank";
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "can't be blank";
        return errors;
    }
    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
    render() {
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.name}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Full Name"
                        value={data.name}
                        onChange={this.onChange}>
                    </input>
                    {errors.name && <InLineError text={errors.name} />}
                </Form.Field>
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
                    <label htmlFor="name">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Make it Secure"
                        value={data.password}
                        onChange={this.onChange}>
                    </input>
                    {errors.password && <InLineError text={errors.password} />}

                </Form.Field>
                <Button className="register-button" primary>Register</Button>
            </Form>
        );
    }
}

RegisterForm.propTypes = {
    submitsubmit: PropTypes.func.isRequired,
};

export default RegisterForm;