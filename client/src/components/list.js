import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ProposalList extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, actions)(ProposalList);