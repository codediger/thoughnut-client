import React, { Component, Fragment } from "react";
import { Input } from "antd";

import UserTable from "./UserTable";

class ManageCustomer extends React.Component {
  render() {
    return (
      <Fragment>
        <Input.Search
          className="m-b-16"
          placeholder="Find user by email"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
          type="email"
        />
        <UserTable data={this.props.customers} />
      </Fragment>
    );
  }
}

export default ManageCustomer;
