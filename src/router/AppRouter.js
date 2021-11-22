//vendor
import React from "react";
//router
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//screens
import { LandingPage } from "../screens/LandingPage";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { SearchyScreen } from "../screens/SearchyScreen";
import { CreateUsersScreen } from "../screens/CreateUsersScreen/CreateUsersScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/searchy" component={SearchyScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/createuser" component={CreateUsersScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
