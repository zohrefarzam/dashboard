import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import LoginPage from "../src/layouts/LoginPage"
import "assets/css/material-dashboard-react.css?v=1.2.0";
import UserProfile from "../src/views/UserProfile/UserProfile"
import Notifications from "../src/views/Notifications/Notifications"
import indexRoutes from "routes/index.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  
    <Switch>
    <Route path="/"component={LoginPage} exact={true} />
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} exact={false}/>;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
