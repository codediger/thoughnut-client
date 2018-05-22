import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
  componentDidMount() {
    document.getElementById("loginTabDefaultOpen").click();
  }

  onChangeTab = (tabContentName, element) => {
    let i, content;
    // hide the content of all contents
    content = document.getElementsByClassName("login-tab-content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    // show content of the tab clicked
    document.getElementById(tabContentName).style.display = "flex";

    // element.style.borderBottomColor = "brown";
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
            <button
              className="login-tab-link"
              onClick={() => this.onChangeTab("Login", this)}
              id="loginTabDefaultOpen"
            >
              Login
            </button>
            <button
              className="login-tab-link"
              onClick={() => this.onChangeTab("Signup", this)}
            >
              Signup
            </button>
          </div>

          <div className="login-tab-content" id="Login">
            Login Content
          </div>
          <div className="login-tab-content" id="Signup">
            Signup Content
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
