import React from "react";
import { Layout, Icon } from "antd";
import './index.css'

const Index = ({ collapsed, toggle }) => (
  <Layout.Header style={{ background: "#fff", padding: 0 }}>
    <Icon
      className="trigger"
      type={collapsed ? "menu-unfold" : "menu-fold"}
      onClick={toggle}
    />
  </Layout.Header>
);

export default Index;
