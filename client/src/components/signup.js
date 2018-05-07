import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import FormField from './form-field';
import * as actions from "../actions";

class SignUp extends Component {
    constructor(props) {console.log(props);
        super(props);
        this.fields = [{name:'email', label:'Email', type:'text'},
            {name:'password', label:'Password', type:'password'},
            {name:'passwordConfirmation', label: 'Confirm password', type:'password'}];
    }

    unSubmit(values) {console.log(this.props);
        this.props.signUpUser(values);
    }

    renderFields() {
        let collection = [];
        this.fields.forEach(field => {
            collection.push(<Field key={field.name} name={field.name} label={field.label} type={field.type} component={FormField}/>);
        });
        return collection;
    }

    render () {
        return (
            <form onSubmit={this.props.handleSubmit(this.unSubmit.bind(this))}>
                {this.renderFields()}
                <button type='submit'>Submit</button>
            </form>
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



export default reduxForm({
    validate,
    form: 'signup'
}, null, actions)(connect(null, actions)(SignUp));