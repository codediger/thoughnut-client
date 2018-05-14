import React, { Component, Fragment } from "react";
import { Input } from "antd";

import EditableTable from "./EditableTable";

class ManageCustomer extends React.Component {
  render() {
    return (
      <Fragment>
        <Input.Search
          placeholder="Find user by email"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
          type="email"
        />
      </Fragment>
    );
  }
}

export default ManageCustomer;
