import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import SignUp from './components/signup';
import SignIn from './components/signin';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/signin' component={SignIn}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
