import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Flex from "./../components/Flex";
import Input from "./../components/Input";
import Button from "./../components/Button";
import Alert from "./../components/Alert";
import Form from "./../components/Form";
import "./Login.css";
import { LOG_IN, SIGN_UP } from "../../api/user";

class Login extends Component {
  state = {
    email: null,
    password: null,
    confirmPassword: null,
    firstName: null,
    lastName: null,
    phone: null
  };

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

  handleLoginAndSignup = (e, mF) => {
    e.preventDefault();

    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      phone
    } = this.state;

    mF({
      variables: {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        phone
      }
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
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
            <Mutation
              mutation={LOG_IN}
              onCompleted={data => {
                localStorage.setItem("token", data.login.token);
                this.props.toggleModal();
              }}
              onError={error => console.log(error)}
            >
              {(mutationFunction, { loading, error }) => (
                <Flex
                  column
                  style={{ padding: "32px 16px" }}
                  justifyContent="flex-start"
                >
                  <Form
                    onSubmit={e =>
                      this.handleLoginAndSignup(e, mutationFunction)
                    }
                  >
                    <Input
                      placeholder="Email"
                      name="email"
                      type="email"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Button
                      type="submit"
                      disabled={loading && true}
                      style={{ marginBottom: 16 }}
                    >
                      {loading ? "Loading ..." : "Login"}
                    </Button>
                  </Form>
                  {error && (
                    <Alert type="danger">
                      We couldn't login you in. Try again
                    </Alert>
                  )}
                </Flex>
              )}
            </Mutation>
          </div>
          <div className="login-tab-content" id="Signup">
            <Mutation
              mutation={SIGN_UP}
              onCompleted={data => {
                localStorage.setItem("token", data.login.token);
                this.props.toggleModal();
              }}
              onError={error => console.log(error)}
            >
              {(mutationFunction, { loading, error }) => (
                <Flex
                  column
                  style={{ padding: "32px 16px" }}
                  justifyContent="flex-start"
                >
                  <Form
                    onSubmit={e =>
                      this.handleLoginAndSignup(e, mutationFunction)
                    }
                  >
                    <Input
                      placeholder="Email"
                      name="email"
                      type="email"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      placeholder="First name"
                      name="firstName"
                      type="text"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      placeholder="Last name"
                      name="lastName"
                      type="text"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      placeholder="Phone number"
                      name="phone"
                      type="number"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      placeholder="Confirm password"
                      name="confirmPassword"
                      type="password"
                      required
                      style={{ marginBottom: 16 }}
                      onChange={this.handleInputChange}
                    />
                    <Button
                      type="submit"
                      disabled={loading && true}
                      style={{ marginBottom: 16 }}
                    >
                      {loading ? "Loading ..." : "Sign up"}
                    </Button>
                  </Form>
                  {error && (
                    <Alert type="danger">
                      We couldn't create your account, kindly try again
                    </Alert>
                  )}
                </Flex>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
