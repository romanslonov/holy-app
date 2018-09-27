import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import injectSheet from 'react-jss';
import FeedPage from '../pages/Feed';
import ProfilePage from '../pages/Profile';
import AdminLayout from './Admin';
import WorkspacesPage from '../pages/workspaces/List';
import CreateWorkspacePage from '../pages/workspaces/Create';
import ItemWorkspacePage from '../pages/workspaces/Item';
import Navigation from '../components/navigation/Navigation';
import AuthenticationChecker from '../components/Authentication';
import Container from '../components/Container';
import NotFoundPage from '../pages/NotFound';

const styles = {
  root: {
    backgroundColor: '#f5f7fa',
  },
};

function DashboardLayout(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <header>
        <Navigation />
      </header>
      <main className={classes.root}>
        <Container>
          <Switch>
            {/* Admin routes */}
            <Route path="/admin" component={AuthenticationChecker(AdminLayout, ['admin'])} />
            {/* Workspaces routes */}
            <Route exact path="/workspaces" component={AuthenticationChecker(WorkspacesPage)} />
            <Route exact path="/workspaces/create" component={CreateWorkspacePage} />
            <Route exact path="/workspaces/:id" component={AuthenticationChecker(ItemWorkspacePage)} />
            {/* Profiles routes */}
            <Route exact path="/profile" component={AuthenticationChecker(ProfilePage)} />
            {/* Index route */}
            <Route exact path="/" component={AuthenticationChecker(FeedPage)} />
            {/* 404 route */}
            <Route component={AuthenticationChecker(NotFoundPage)} />
          </Switch>
        </Container>
      </main>
    </React.Fragment>
  );
}

DashboardLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(DashboardLayout);
