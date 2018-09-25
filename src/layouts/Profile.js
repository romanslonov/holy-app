import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../pages/Profile';
import Navigation from '../components/navigation/Navigation';
import AuthenticationChecker from '../components/Authentication';

function ProfileLayout() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="main">
        <Switch>
          <Route path="/admin" component={AuthenticationChecker(ProfilePage)} />
        </Switch>
      </main>
    </div>
  );
}

export default ProfileLayout;
