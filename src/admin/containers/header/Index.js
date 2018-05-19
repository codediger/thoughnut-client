import React from "react";
import { Link } from "react-router-dom";
import { Layout, Icon, Avatar, Row, Col, Dropdown, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/admin/logout">Logout</Link>
    </Menu.Item>
  </Menu>
);

const Header = ({ collapsed, toggle }) => (
  <Layout.Header
    style={{
      background: "#fff",
      padding: 0,
      boxShadow: "#363636 0px 1px 8px -4px"
    }}
  >
    <Row>
      <Col span={20}>
        <Icon
          style={{
            fontSize: 20,
            padding: 24
          }}
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
      </Col>
      <Col span={4}>
        <Dropdown overlay={menu}>
          <Row>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            {" "}{"Hello, Orinami"} <Icon type="down" />
          </Row>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
);

export default Header;
