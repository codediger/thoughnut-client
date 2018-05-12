import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

const Index = ({ routes }) => {
  return <Layout.Content
    style={{
      margin: "24px 16px",
      minHeight: 280
    }}
  >
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Layout.Content>
};

export default Index;
