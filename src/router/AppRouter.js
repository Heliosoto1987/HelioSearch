//vendor
import React from "react";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//screens
import { LandingPage } from "../screens/LandingPage";
import { SearchyScreen } from "../screens/SearchyScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/searchy" component={SearchyScreen} />
        </Switch>
      </div>
    </Router>
  );
};
