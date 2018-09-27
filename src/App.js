import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import injectSheet, { ThemeProvider } from 'react-jss';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import history from './history';
import theme from './theme';
import ToastContainer from './components/ToastContainer';

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
    <React.Fragment>
      <ToastContainer />
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Switch>
              <Route path="/auth" component={AuthLayout} />
              <Route path="/" component={DashboardLayout} />
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(App);
