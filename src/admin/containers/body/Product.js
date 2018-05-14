import React, { Component } from "react";
import { DatePicker, Tabs } from "antd";
import moment from "moment";
import "./Home.css";

import ProductList from "../../components/ProductList";
import ManageProduct from "../../components/ManageProduct";
import RowCard from "../../components/RowCard";

// const dateFormat = "YYYY/MM/DD";
// const monthFormat = "YYYY/MM";

// const RangeDate = (
//   <DatePicker.RangePicker
//     defaultValue={[
//       moment("2015/01/01", dateFormat),
//       moment("2015/01/01", dateFormat)
//     ]}
//     format={dateFormat}
//   />
// );

class Product extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <Tabs.TabPane tab="Product List" key="1">
          <ProductList />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Manage Products" key="2">
          <ManageProduct />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default RowCard(Product);
