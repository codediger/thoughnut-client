import React, { Component } from "react";
import {  Tabs } from "antd";

import RowCard from "../../components/RowCard";
import ChangePassword from "../../components/ChangePassword";
import ManageProfile from "../../components/ManageProfile";
import OtherSetting from "../../components/OtherSetting";

class Product extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <Tabs.TabPane tab="Manage Profile" key="1">
          <ManageProfile />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Change Password" key="2">
          <ChangePassword />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Other Settings" key="3">
          <OtherSetting/>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default RowCard(Product);
