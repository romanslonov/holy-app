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
import Container from '../components/Container';
import NotFoundPage from '../pages/NotFound';
import ConfirmationPage from '../pages/Confirmation';
import UserFetcher from '../HOC/UserFetcher';
import AuthGuard from '../HOC/AuthGuard';
import CheckPermission from '../HOC/CheckPermission';
import RedirectResolver from '../HOC/RedirectResolver';

const styles = theme => ({
  main: {
    backgroundColor: '#f5f7fa',
    flexGrow: '1',
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 2}px`,
  },
});

function DashboardLayout(props) {
  const { classes } = props;
  return (
    <AuthGuard>
      <UserFetcher>
        <RedirectResolver>
          <React.Fragment>
            <header>
              <Navigation />
            </header>
            <main className={classes.main}>
              <Container>
                <Switch>
                  {/* Admin routes */}
                  <Route path="/dashboard/admin" component={CheckPermission(AdminLayout, ['admin'])} />
                  {/* Workspaces routes */}
                  <Route exact path="/dashboard/workspaces" component={WorkspacesPage} />
                  <Route exact path="/dashboard/workspaces/create" component={CreateWorkspacePage} />
                  <Route exact path="/dashboard/workspaces/:id" component={ItemWorkspacePage} />
                  {/* Profiles routes */}
                  <Route exact path="/dashboard/profile" component={ProfilePage} />
                  {/* Confirmation email route */}
                  <Route exact path="/dashboard/confirmation" component={ConfirmationPage} />
                  <Route exact path="/dashboard/confirmation/:token" component={ConfirmationPage} />
                  {/* Index route */}
                  <Route exact path="/dashboard" component={FeedPage} />
                  {/* 404 route */}
                  <Route exact path="/dashboard/404" component={NotFoundPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Container>
            </main>
          </React.Fragment>
        </RedirectResolver>
      </UserFetcher>
    </AuthGuard>
  );
}

DashboardLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(DashboardLayout);
