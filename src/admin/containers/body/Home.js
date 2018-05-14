import React, { Component, Fragment } from "react";
import { Tabs, Card, Row, Col, Icon, Divider } from "antd";
import "./Home.css";

class Home extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <Fragment>
        <Row gutter={8}>
          <Col xs={24} sm={12} md={12} lg={6} xl={6} className="m-b-16">
            <Card>
              <span>Total Sales</span>
              <span className="fw-400 price__lg">$50,008.78</span>
              <span>Sales up by 11% this week</span>
              <Divider className="divider" />
              <span>
                Average daily sales: <span className="fw-400">$1,000.78</span>
              </span>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6} className="m-b-16">
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
          <Col xs={24} sm={12} md={12} lg={6} xl={6} className="m-b-16">
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
          <Col xs={24} sm={12} md={12} lg={6} xl={6} className="m-b-16">
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

        <Row>
          <Col span={24}>
            <Card>
              <Tabs defaultActiveKey="1" onChange={this.callback}>
                <Tabs.TabPane tab="Sales" key="1">
                  Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Views" key="2">
                  Content of Tab Pane 2
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Home;
