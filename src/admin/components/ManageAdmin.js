import React, { Component, Fragment } from "react";
import { Button } from "antd";

import UserTable from "./UserTable";

class ManageAdmin extends Component {
  render() {
    return (
      <Fragment>
        {/* <Input.Search
          className="m-b-16"
          placeholder="Find user by email"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
          type="email"
        /> */}
        <UserTable data={this.props.admin} />
      </Fragment>
    );
  }
}

export default ManageAdmin;
