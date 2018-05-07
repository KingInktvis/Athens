import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import SignUp from './components/signup';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact parth='/signup' component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
