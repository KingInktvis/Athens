import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class Header extends Component {

    signUp() {
        return this.props.signInReducer.token ? '' : <li><Link to='/signup'>Sign up</Link></li>;
    }

    signIn() {
        return this.props.signInReducer.token ? '' : <li><Link to='/signin'>Sign in</Link></li>;
    }

    signOut() {
        return this.props.signInReducer.token ? <li><a onClick={this.props.signOut} href='#'>Sign out</a></li> : '';
    }

    render() {
        return(
            <nav>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo'>Athens</Link>
                    <ul className='right hide-on-med-and-down'>
                        {this.signUp()}
                        {this.signIn()}
                        {this.signOut()}
                    </ul>

                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        signInReducer: state.signin
    }
}

export default connect(mapStateToProps, actions)(Header);