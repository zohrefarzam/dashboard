import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import LoginPage from '../src/layouts/LoginPage';
import "assets/css/material-dashboard-react.css?v=1.2.0";
import hist from './hist'
import indexRoutes from "routes/index.js";



ReactDOM.render(
  <Router history={hist}>
    <Switch>
   
    <Route path="/" exact component={LoginPage} />
   
    {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
   
  </Router>,
  document.getElementById("root")
);
