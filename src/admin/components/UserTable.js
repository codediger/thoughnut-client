import React from "react";
import PropTypes from "prop-types";

import Table from "./Table";

const UserTable = ({ data }) => {
  const columns = [
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "First name",
      dataIndex: "firstName"
    },
    {
      title: "Last Name",
      dataIndex: "lastName"
    },
    {
      title: "Phone",
      dataIndex: "phone"
    }
  ];
  return <Table data={data} columns={columns} />
};

UserTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default UserTable;
