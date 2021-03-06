import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import SignUp from './components/signup';
import SignIn from './components/signin';
import CreateProposal from './components/create-proposal';
import ViewProposal from './components/view-proposal';
import ProposalList from './components/list';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/signin' component={SignIn}/>
                    <Route exact path='/create-proposal' component={CreateProposal}/>
                    <Route path='/proposal/:id' component={ViewProposal}/>
                    <Route path='/proposal-list' component={ProposalList}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
