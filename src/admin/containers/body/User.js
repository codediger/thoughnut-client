import React, { Component, Fragment } from "react";
import { Layout, Card, Row, Col, Icon, Divider } from "antd";
import "./Home.css";

class User extends Component {
  render() {
    return   <Fragment>
    <Row gutter={8}>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Card>
          <span>All users</span>
          <span className="fw-400 price__lg">$50,008.78</span>
          <span>Sales up by 11% this week</span>
          <Divider className="divider" />
          <span>
            Average daily sales: <span className="fw-400">$1,000.78</span>
          </span>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Card>
          <span>Web views</span>
          <span className="fw-400 price__lg">400,000</span>
          <span>4500 visitors this week</span>
          <Divider className="divider" />
          <span>
            Today visitor's count: <span className="fw-400">1000</span>
          </span>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Card>
          <span>Orders</span>
          <span className="fw-400 price__lg">500,003</span>
          <span>450 orders this week</span>
          <Divider className="divider" />
          <span>
            Average daily sales: <span className="fw-400">$1,000.78</span>
          </span>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Card>
          <span>Payments</span>
          <span className="fw-400 price__lg">$50,008.78</span>
          <span>Sales up by 11% this week</span>
          <Divider className="divider" />
          <span>
            Conversion Rate: <span className="fw-400">54%</span>
          </span>
        </Card>
      </Col>
    </Row>
  </Fragment>
  }
}

export default User;


