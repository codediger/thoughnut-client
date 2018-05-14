import React from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

const Loading = ({ loading, children, ...args }) => (
  <Spin spinning={loading} {...args} tip="Loading...">
    {children}
  </Spin>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element
};

export default Loading;
