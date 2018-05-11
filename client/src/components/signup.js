import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormField from './form-field';
import * as actions from "../actions";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.fields = [{name:'email', label:'Email', type:'text'},
            {name:'password', label:'Password', type:'password'},
            {name:'passwordConfirmation', label: 'Confirm password', type:'password'}];
    }

    componentWillUnmount() {console.log('reset');
        this.props.resetSignUp();
    }

    unSubmit(values) {
        this.props.signUpUser(values);
    }

    renderFields() {
        let collection = [];
        this.fields.forEach(field => {
            collection.push(<Field key={field.name} name={field.name} label={field.label} type={field.type} component={FormField}/>);
        });
        return collection;
    }

    onSignUpRedirect() {
        if (this.props.signUpReducer.status === 201) {
            return <Redirect to='/'/>
        }
    }

    render () {
        return (
            <div>
                {this.onSignUpRedirect()}
                <div>{this.props.signUpReducer.error}</div>
                <form onSubmit={this.props.handleSubmit(this.unSubmit.bind(this))}>
                    {this.renderFields()}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

 function validate (values) {
    const errors = {};
    if (!values.email) {
        errors.email = 'Please enter an email';
    }
    if (!values.password) {
        errors.password = 'Please enter a password';
    }
    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Please confirm your password';
    } else if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = 'Passwords do not match';
    }
    return errors;
}

function mapStateToProps(state) {
    return {
        signUpReducer: state.signup
    }
}

export default reduxForm({
    validate,
    form: 'signup'
})(connect(mapStateToProps, actions)(SignUp));