import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const T = ({ loading, data, columns }) => (
  <Table
    bordered
    dataSource={data}
    columns={columns}
    size="middle"
  />
);

T.propType = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default T;
