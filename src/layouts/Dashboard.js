import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import Navigation from '../components/Navigation';
import AuthenticationChecker from '../components/AuthenticationChecker';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <header>
        <Navigation />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/dashboard" component={AuthenticationChecker(HomePage)}/>
          <Route exact path="/dashboard/profile" component={AuthenticationChecker(ProfilePage)}/>
        </Switch>
      </main>
    </div>
  )
}

export default Dashboard;
