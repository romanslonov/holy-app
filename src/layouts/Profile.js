import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../pages/Profile';
import Navigation from '../components/navigation/Navigation';
import AuthenticationChecker from '../components/Authentication';

function Profile() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="main">
        <Switch>
          <Route path="/profile" component={AuthenticationChecker(ProfilePage)} />
        </Switch>
      </main>
    </div>
  );
}

export default Profile;
