import React from "react";
import hist from '../../hist'
import { Router, Route, Switch } from "react-router-dom";
import Edit from '../Edit/Edit'
import AddingBrand from '../AddingBrand/AddingBrand'
function TableList({ ...props }) {
  const { classes } = props;
  return (
  
    <Router history={hist}>
  
    <Switch>
    <Route path="/Edit"component={Edit} exact />
    <Route path="/"component={AddingBrand}  />
    </Switch>
  </Router>
  );
}

export default TableList;
