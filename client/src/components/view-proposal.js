import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ViewProposal extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        props.fetchProposalId(this.id);
    }

    title() {
        const proposal = this.props.proposals[this.id];
        if (proposal) {
            if (proposal.error) {
                return 'Not found';
            }
            return proposal.title;
        }

    }

    body() {
        const proposal = this.props.proposals[this.id];
        if (proposal) {
            if (proposal.error){
                return 'The requested proposal can not be found.';
            }
            return proposal.body;

        } else {
            return <b>Loading</b>;
        }
    }

    render() {
        return (
            <div>
                <h3>{this.title()}</h3>
                <div>{this.body()}</div>
            </div>
        );
    }
}

function mapsStateToProps({ proposals }) {
    return {
        proposals
    }
}

export default connect(mapsStateToProps, actions)(ViewProposal);