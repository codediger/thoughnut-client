import React, { Component } from "react";
import { Layout } from "antd";

import Header from "./containers/header/Index";
import Sidebar from "./containers/sidebar/Index";
import Body from "./containers/body/Index";
import Footer from "./containers/footer/Index";

import Home from "./containers/body/Home";
import User from "./containers/body/User";
import Product from "./containers/body/Product";
import Order from "./containers/body/Order";
import Size from "./containers/body/Size";
import Setting from "./containers/body/Setting";

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

class Index extends Component {
  state = {
    collapsed: false
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
