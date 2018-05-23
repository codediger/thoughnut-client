import React, { Component } from "react";

import Flex from "./../components/Flex";
import Input from "./../components/Input";
import Button from "./../components/Button";
import "./Login.css";

class Login extends Component {
  componentDidMount() {
    document.getElementById("loginTabDefaultOpen").click();
  }

  onChangeTab = e => {
    let i, link, content;
    const { name, style } = e.target;
    // hide th of all tabs
    link = document.getElementsByClassName("login-tab-link");
    for (i = 0; i < link.length; i++) {
      link[i].style.borderBottomColor = "transparent";
    }
    // hide the content of all contents
    content = document.getElementsByClassName("login-tab-content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    // show content of the tab clicked
    document.getElementById(name).style.display = "flex";
    style.borderBottomColor = "brown";
  };
  render() {
    const display = this.props.display ? "flex" : "none";
    return (
      <div
        className="login-drawer"
        id="loginDrawer"
        style={{ display: `${display}` }}
      >
        <div className="login-container">
          <div className="login-tabs">
            <a
              name="Login"
              className="login-tab-link"
              onClick={this.onChangeTab}
              id="loginTabDefaultOpen"
            >
              Login
            </a>
            <a
              name="Signup"
              className="login-tab-link"
              onClick={this.onChangeTab}
            >
              Sign Up
            </a>
          </div>

          <div className="login-tab-content" id="Login">
            <Flex
              column
              style={{ padding: "32px 16px" }}
              justifyContent="flex-start"
            >
              <Input
                placeholder="Email"
                type="email"
                style={{ marginBottom: 16 }}
              />
              <Input
                placeholder="Password"
                type="password"
                style={{ marginBottom: 16 }}
              />
              <Button type="submit">Login</Button>
            </Flex>
          </div>
          <div className="login-tab-content" id="Signup">
            <Flex
              column
              style={{ padding: "32px 16px" }}
              justifyContent="flex-start"
            >
              <Input
                placeholder="Email"
                type="email"
                style={{ marginBottom: 16 }}
              />
              <Input
                placeholder="First name"
                type="text"
                style={{ marginBottom: 16 }}
              />
              <Input
                placeholder="Last name"
                type="text"
                style={{ marginBottom: 16 }}
              />
              <Input
                placeholder="Phone number"
                type="number"
                style={{ marginBottom: 16 }}
              />
              <Input
                placeholder="Password"
                type="password"
                style={{ marginBottom: 16 }}
              />
              <Input
                placeholder="Confirm password"
                type="password"
                style={{ marginBottom: 16 }}
              />
              <Button type="submit">Sign up</Button>
            </Flex>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
