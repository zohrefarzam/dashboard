import React, { Component } from "react";
import "./loginStyle.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import hist from '../../hist'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      open: false
    };
  }

  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  signIn = () => {
    if (this.state.username === "react" && this.state.password === "password") {
      this.setState({
        open: true,
        message: "You have successfully Logged In!"
      });
    } else {
      this.setState({
        open: true,
        message: "Incorrect Username or Password!"
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <div className="Login">
            <TextField className="field"
              variant="standard"
              placeholder="نام کاربری"
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
            />
            <TextField
              variant="standard"
              placeholder="پسورد"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => hist.push("/dashboard")}
              >
                ورود
              </Button>
            </div>
          </div>
      
        </header>
      </div>
    );
  }
}

export default LoginPage;