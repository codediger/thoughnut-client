import React, { Component } from "react";
import { Tabs, Button } from "antd";
import { Query } from "react-apollo";
import "./Home.css";

import { GET_PRODUCTS } from "../../../api/product";
import ProductList from "../../components/ProductList";
import ManageProduct from "../../components/ManageProduct";
import RowCard from "../../components/RowCard";
import ErrorBoundary from "../../../components/ErrorBoundary";
import Loading from "../../components/Loading";

class Product extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <Tabs.TabPane tab="Product List" key="1">
          <Button className="m-b-16" icon="plus">
            Add
          </Button>
          <ErrorBoundary>
            <Query query={GET_PRODUCTS}>
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <p>
                      <Loading loading={loading} />
                    </p>
                  );
                if (error) return <p>Couldn't get the list of admins :(</p>;
                const dataSource = data.products.map(item => {
                  return { ...item, key: item.id };
                });
                return <ProductList products={dataSource} loading={loading} />;
              }}
            </Query>
          </ErrorBoundary>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Manage Products" key="2">
          <ManageProduct />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default RowCard(Product);
