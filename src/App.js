import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import DashboardLayout from './layouts/Dashboard';
import ProfileLayout from './layouts/Profile';
import AuthLayout from './layouts/Auth';
import NotFoundPage from './pages/NotFound';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={DashboardLayout} />
            <Route path="/profile" component={ProfileLayout} />
            <Route path="/auth" component={AuthLayout} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
