import React, { Component } from "react";
import { DatePicker, Tabs } from "antd";
import moment from "moment";
import "./Home.css";

import ManageAdmin from "../../components/ManageAdmin";
import ManageCustomer from "../../components/ManageCustomer";
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

class User extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <Tabs.TabPane tab="Manage Customers" key="1">
          <ManageCustomer />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Manage Admins" key="2">
          <ManageAdmin />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default RowCard(User);
