import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import OverviewPage from '../pages/admin/Overview';
import InvitationsPage from '../pages/admin/Invitations';
import UsersPage from '../pages/admin/Users';
import AuthenticationChecker from '../components/Authentication';
import NotFoundPage from '../pages/NotFound';

function AdminLayout(props) {
  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink to="/admin">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/admin/invitations">Invitations</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users">Users</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/admin" render={() => <OverviewPage {...props} />} />
        <Route exact path="/admin/invitations" render={() => <InvitationsPage {...props} />} />
        <Route exact path="/admin/users" render={() => <UsersPage {...props} />} />
        {/* 404 route */}
        <Route component={AuthenticationChecker(NotFoundPage)} />
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(AdminLayout);
