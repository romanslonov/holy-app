import React from "react";
import {Route, Switch} from "react-router-dom";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

function Auth() {
  return (
    <div className="dashboard-layout">
      <main>
        <Switch>
          <Route exact path="/auth/login" component={LoginPage} />
          <Route exact path="/auth/register" component={RegisterPage} />
        </Switch>
      </main>
    </div>
  )
}

export default Auth;
