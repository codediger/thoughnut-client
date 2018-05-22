import React, { Component } from "react";
import { Query } from "react-apollo";

import ErrorBoundary from "../../components/ErrorBoundary";
import HomeContainer from "../components/HomeContainer";
import Container from "../components/Container";
import Text from "../components/Text";
import Flex, { Item } from "../components/Flex";
import { GET_PRODUCTS } from "../../api/product";

class Home extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (error) {
              return <p>Error!</p>;
            }
            return <HomeContainer data={data} onProductCardClick={this.props.onProductCardClick}/>;
          }}
        </Query>
      </ErrorBoundary>
    );
  }
}

export default Home;
