import React, { Component } from "react";
import { Tabs } from "antd";

import RowCard from "../../components/RowCard";
import ChangePassword from "../../components/ChangePassword";
import ManageProfile from "../../components/ManageProfile";
import OtherSetting from "../../components/OtherSetting";

class Setting extends Component {
  state = {
    oldPassword: null,
    newPassword: null,
    cNewPassword: null
  };

  callback = key => {
    console.log(key);
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleChangePasswordSubmit = mF => {
    const { oldPassword, newPassword } = this.state;
    mF({ variables: { oldPassword, newPassword } });
  };

  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <Tabs.TabPane tab="Manage Profile" key="1">
          <ManageProfile />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Change Password" key="2">
          <ChangePassword
            handleInputChange={this.handleInputChange}
            handleChangePasswordSubmit={this.handleChangePasswordSubmit}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Other Settings" key="3">
          <OtherSetting />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default RowCard(Setting);
