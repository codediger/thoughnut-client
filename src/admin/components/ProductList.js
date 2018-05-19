import React, { Component } from "react";
import { List } from "antd";

import ProductListItem from "./ProductListItem";

class ProductList extends React.Component {
  render() {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={this.props.products}
        renderItem={item => <ProductListItem item={item} />}
      />
    );
  }
}

export default ProductList;
