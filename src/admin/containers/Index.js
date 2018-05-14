import React, { Component } from "react";
import { Layout } from "antd";

import Header from "./header/Index";
import Sidebar from "./sidebar/Index";
import Body from "./body/Index";
import Footer from "./footer/Index";

import Home from "./body/Home";
import User from "./body/User";
import Product from "./body/Product";
import Order from "./body/Order";
import Size from "./body/Size";
import Setting from "./body/Setting";

const routes = [
  {
    path: "/admin/dashboard",
    component: () => <Home />,
    exact: true,
    type: "dashboard",
    name: "Dashboard"
  },
  {
    path: "/admin/manage-users",
    exact: true,
    component: () => <User />,
    type: "team",
    name: "Manage Users"
  },
  {
    path: "/admin/manage-products",
    exact: true,
    component: () => <Product />,
    type: "shop",
    name: "Manage Products"
  },
  {
    path: "/admin/manage-orders",
    component: () => <Order />,
    exact: true,
    type: "barcode",
    name: "Manage Orders"
  },
  {
    path: "/admin/manage-sizes",
    component: () => <Size />,
    exact: true,
    type: "tag",
    name: "Manage Sizes"
  },
  {
    path: "/admin/settings",
    component: () => <Setting />,
    exact: true,
    type: "setting",
    name: "Settings"
  }
];

const collapsed = window.outerWidth < 480 ? true : false;

class Index extends Component {
  state = {
    collapsed: collapsed
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sidebar collapsed={collapsed} routes={routes} />
        <Layout>
          <Header toggle={this.toggle} collapsed={collapsed} />
          <Body routes={routes} />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default Index;
