import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './layouts/Dashboard';
import Auth from './layouts/Auth';
import NotFoundPage from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/auth" component={Auth} />
          <Redirect exact from="/" to="/dashboard" />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
