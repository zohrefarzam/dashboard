import React from "react";
import { Grid } from "material-ui";
import hist from '../../hist'
import { Router, Route, Switch } from "react-router-dom";
import Login from '../../views/Login/Login'
import indexRoutes from '../../routes/index'
function TableList({ ...props }) {
  const { classes } = props;
  return (
  
    <Router history={hist}>
  
    <Switch>
    <Route path="/"component={Login} exact />
    {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>
  );
}

export default TableList;
