import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/Home";
import Navigation from '../components/Navigation';
import AuthenticationChecker from '../components/Authentication';

function Dashboard() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="main">
        <Switch>
          <Route path="/" component={AuthenticationChecker(HomePage)}/>
        </Switch>
      </main>
    </div>
  )
}

export default Dashboard;
