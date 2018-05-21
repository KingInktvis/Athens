import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import FormField from './form-field';

class CreateProposal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [{name: 'title', label: 'title', type: 'text'},
                {name: 'body', label: 'Body', type: 'text-area'}]
        }
    }

    componentWillUnmount() {
        this.props.createProposalDefault();
    }

    onSubmit(values) {
        this.props.createProposal(values);
    }

    renderFields() {
        const form = [];
        for (let i = 0; i < this.state.fields.length; ++i) {
            const field = this.state.fields[i];
            form.push(<Field name={field.name} label={field.label} type={field.type} key={field.name} component={FormField}/>);
        }
        return form;
    }

    onSuccesRedirect() {
        if (this.props.createProposalReducer.success) {
            return <Redirect to='/'/>
        }
    }

    render() {
        return(
            <div>
                {this.onSuccesRedirect()}
                {this.props.createProposalReducer.error}
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    {this.renderFields()}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        createProposalReducer: state.createProposal
    }
}

export default reduxForm({
    form: 'createProposal'
})(
    connect(mapStateToProps, actions)(CreateProposal)
);