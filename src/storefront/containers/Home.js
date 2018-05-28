import React, { Component } from "react";
import { Query } from "react-apollo";

import ErrorBoundary from "../../components/ErrorBoundary";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Container from "../components/Container";
import Text from "../components/Text";
import Button from "../components/Button";
import Flex, { Item } from "../components/Flex";
import { GET_PRODUCTS } from "../../api/product";
import { GET_CART } from "../../api/cart";

const nav = [
  {
    name: "All"
  },
  {
    name: "Recently added"
  },
  {
    name: "On sale"
  }
];

class Home extends Component {
  state = {
    size: null,
    quantity: 1
  };

  handleAddToCart = (mutationFunction, product) => {
    const { quantity, size } = this.state;
    const {
      id,
      pricing: { basePrice }
    } = product;
    const spiltSize = size.split("-");
    const total = spiltSize[1] * quantity * basePrice;
    mutationFunction({
      variables: { productId: id, sizeId: spiltSize[0], quantity, total }
    });
  };

  handleSelectSize = e => this.setState({ size: e.target.value });

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state.quantity);
    return (
      <Flex>
        <Item grow wrap width="60%" alignContent="flex-start">
          <Flex>
            <div style={{ marginBottom: 48 }}>
              <Item>
                <Text as="h4" color="brown">
                  Menu:
                </Text>
                {nav.map(item => (
                  <Button inverse noBorder key={item.name}>
                    {item.name}
                  </Button>
                ))}
              </Item>
            </div>
          </Flex>
          <ErrorBoundary>
            <Query query={GET_PRODUCTS}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <p>Loading...</p>;
                }
                if (error) {
                  return <p>Could not load products</p>;
                }
                return (
                  <ProductList
                    product={data}
                    handleProductCardClick={this.props.handleProductCardClick}
                    handleAddToCart={this.handleAddToCart}
                    handleSelect={this.handleSelectSize}
                    handleInputChange={this.handleInputChange}
                  />
                );
              }}
            </Query>
          </ErrorBoundary>
        </Item>
        <Item shrink width="30%">
          <div className="cart">
            <ErrorBoundary>
              <Query query={GET_CART}>
                {({ loading, error, data }) => {
                  if (loading) {
                    return <p>Loading...</p>;
                  }
                  if (error) {
                    return <p>You need to be signed in to view your cart</p>;
                  }
                  return <Cart cart={data} />;
                }}
              </Query>
            </ErrorBoundary>
          </div>
        </Item>
      </Flex>
    );
  }
}

export default Home;
