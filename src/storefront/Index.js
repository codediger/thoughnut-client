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
    productModal: false
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

  onLoginClick = () =>
    this.setState(prevState => {
      return { loginDrawer: !prevState.loginDrawer };
    });

  onProductCardClick = (product) => {
    console.log(product)
    this.setState(prevState => {
      return { productModal: !prevState.productModal };
    })
  }

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
                <Button inverse noBorder onClick={this.onLoginClick}>
                  Create an account / Login
                </Button>
              </Item>
            </Flex>
          </Container>
        </Header>
        <Main>
          <Home onProductCardClick={this.onProductCardClick} />
        </Main>
        {/* <Footer>
      <Container>

      </Container>
    </Footer> */}
        <Login display={this.state.loginDrawer} />
        <ProductModal display={this.state.productModal} />
      </Fragment>
    );
  }
}
export default Index;
