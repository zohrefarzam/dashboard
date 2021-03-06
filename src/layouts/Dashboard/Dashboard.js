import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// import MuiThemeProvider and createMuiTheme to create custom theme
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import jss and jss-rtl for change all style to support RTL
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

import { Header, Footer, Sidebar } from "components";

import dashboardRoutes from "routes/dashboard.js";

import appStyle from "assets/jss/material-dashboard-react/appStyle.js";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

// create custom theme configuration
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Vazir", sans-serif'
  }
});
// Configure JSS


// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  componentDidMount() {
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div  generateClassName={generateClassName}>
          <div className={classes.wrapper}>
            <Sidebar
            style={{float:'right'}}
              routes={dashboardRoutes}
              logoText={"Creative Tim"}
              logo={logo}
              image={image}
              handleDrawerToggle={this.handleDrawerToggle}
              open={this.state.mobileOpen}
              color="blue"
              {...rest}
            />
            <div className={classes.mainPanel} ref="mainPanel">
              <Header
                routes={dashboardRoutes}
                handleDrawerToggle={this.handleDrawerToggle}
                {...rest}
              />
              {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
              {this.getRoute() ? (
                <div className={classes.content}>
                  <div className={classes.container}>{switchRoutes}</div>
                </div>
              ) : (
                <div className={classes.map}>{switchRoutes}</div>
              )}
              {this.getRoute() ? <Footer /> : null}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(App);
