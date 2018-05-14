import React, { Component } from "react";
import { Row, Col, Card } from "antd";

const rowCard = WrappedComponent =>
  class RowCard extends Component {
    render() {
      return (
        <Row>
          <Col span={24} className="m-b-16">
            <Card>
              <WrappedComponent />
            </Card>
          </Col>
        </Row>
      );
    }
  };

export default rowCard;
