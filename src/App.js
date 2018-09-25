import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import injectSheet, { ThemeProvider } from 'react-jss';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import theme from './theme';

const styles = {
  '@global': {
    body: {
      margin: 0,
      backgroundColor: '#f5f7fa',
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
  },
  root: {
    minHeight: '100vh',
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/auth" component={AuthLayout} />
            <Route path="/" component={DashboardLayout} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(App);
