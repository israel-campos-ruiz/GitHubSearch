import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GitHubUser from "../pages/GitHubUser";
import Repos from "../pages/Repos";
import MainTheme from "../theme/MainTheme";

const AppRouter = () => {
  return (
    <Router>
      <MainTheme>
      <Switch>
        <Route component={GitHubUser} path="/user" />
        <Route component={Repos} path="/repos" />
        <Redirect from="/" to="/user" />
      </Switch>
      </MainTheme>
    </Router>
  );
};

export default AppRouter;
