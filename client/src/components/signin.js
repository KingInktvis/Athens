import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import FormField from './form-field';

class SignIn extends Component {
    onSubmit(values) {
        this.props.signInUser(values);
    }

    signInRedirect() {
        if (this.props.signInReducer.token) {
            return <Redirect to='/'/>
        }
    }

    render() {
        return (
            <div>
                {this.signInRedirect()}
                {this.props.signInReducer.error}
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field name='email' label='Email' type='text' component={FormField}/>
                    <Field name='password' label='Password' type='password' component={FormField}/>
                    <button type='submit'>Log In</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.email) {
        errors.email = 'Please enter your email';
    }
    if (!values.password) {
        errors.password = 'Please enter your email';
    }
    return errors
}

function mapStateToProps(state) {
   return {
       signInReducer: state.signin
   }
}

export default reduxForm({
    validate,
    form: 'signin'
})(
    connect(mapStateToProps, actions)(SignIn)
);