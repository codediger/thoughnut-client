import React, { Component, Fragment } from "react";

import Home from "./containers/Home";

import Login from "./containers/Login";
import Header from "./components/Header";
import Button from "./components/Button";
import Container from "./components/Container";
import Flex, { Item } from "./components/Flex";
import Text from "./components/Text";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import "./Index.css";

class Index extends Component {
  state = {
    loginDrawer: false,
    productModal: false,
    loggedIn: false
  };

  componentDidMount() {
    const loginDrawer = document.getElementById("loginDrawer");
    const productModal = document.getElementById("productModal");
    window.onclick = e => {
      if (e.target === loginDrawer) {
        this.setState({ loginDrawer: false });
      }
      if (e.target === productModal) {
        this.setState({ productModal: false });
      }
    };
  }

  handleLoginClick = () =>
    this.setState(prevState => ({ loginDrawer: !prevState.loginDrawer }));

  handleProductCardClick = product => {
    console.log(product);
    this.setState(prevState => ({ productModal: !prevState.productModal }));
  };

  handleToggleModal = () => {
    this.setState(prevState => ({
      loginDrawer: !prevState.loginDrawer,
      loggedIn: true
    }));
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <Fragment>
        <Header>
          <Container>
            <Flex>
              <Item grow>
                <Text as="h4" bold>
                  Thoughnut
                </Text>
                {this.state.loggedIn ? (
                  <Button inverse noBorder onClick={this.handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <Button inverse noBorder onClick={this.handleLoginClick}>
                    Create an account / Login
                  </Button>
                )}
              </Item>
            </Flex>
          </Container>
        </Header>
        <Main>
          <Home handleProductCardClick={this.handleProductCardClick} />
        </Main>
        {/* <Footer>
      <Container>

      </Container>
    </Footer> */}
        <Login
          display={this.state.loginDrawer}
          toggleModal={this.handleToggleModal}
        />
        <ProductModal display={this.state.productModal} />
      </Fragment>
    );
  }
}
export default Index;
