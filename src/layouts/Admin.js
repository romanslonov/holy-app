import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import OverviewPage from '../pages/admin/Overview';
import InvitationsPage from '../pages/admin/Invitations';

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
      </ul>
      <Switch>
        <Route exact path="/admin" render={() => <OverviewPage {...props} />} />
        <Route path="/admin/invitations" render={() => <InvitationsPage {...props} />} />
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(AdminLayout);
