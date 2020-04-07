import React from "react";
import { Grid } from "material-ui";
import hist from '../../hist'
import addRouts from "../../routes/addRouts";
import { RegularCard, Table, ItemGrid } from "components";
import { Router, Route, Switch } from "react-router-dom";
import RegularButton from "../../components/CustomButtons/Button"
import TableGrid from './TableGrid';
import Edit from '../Edit/Edit'
function TableList({ ...props }) {
  const { classes } = props;
  return (
  
    <Router history={hist}>
  
    <Switch>
    <Route path="/dashboard"component={TableGrid} exact />
    <Route path="/"component={Edit}  />
    </Switch>
  </Router>
  );
}

export default TableList;
