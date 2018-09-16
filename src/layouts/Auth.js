import React from "react";
import {Route, Switch} from "react-router-dom";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

function Auth() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/register" component={RegisterPage} />
        </Switch>
      </main>
    </div>
  )
}

export default Auth;
