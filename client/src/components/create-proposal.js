import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';
import FormField from './form-field';

class CreateProposal {
    render() {
        return(
            <div>
                <form>

                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        signInReducer: state.signIn
    }
}

export default reduxForm({
    form: 'createProposal'
})(
    connect(mapStateToProps, actions)(CreateProposal)
);