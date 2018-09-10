import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './layouts/Dashboard';
import Auth from './layouts/Auth';
import NotFoundPage from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/profile" component={Dashboard} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
