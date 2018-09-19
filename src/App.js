import React from 'react';
import PropTypes from 'prop-types';
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
            <Route exact path="/" component={DashboardLayout} />
            <Route path="/profile" component={ProfileLayout} />
            <Route path="/auth" component={AuthLayout} />
            <Route component={NotFoundPage} />
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
