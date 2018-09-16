import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import injectSheet, { ThemeProvider } from 'react-jss';
import DashboardLayout from './layouts/Dashboard';
import ProfileLayout from './layouts/Profile';
import AuthLayout from './layouts/Auth';
import NotFoundPage from './pages/NotFound';
import theme from './theme';

const styles = {
  '@global': {
    body: {
      margin: 0,
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    }
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
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
      </div>
    );
  }
}

export default injectSheet(styles)(App);
