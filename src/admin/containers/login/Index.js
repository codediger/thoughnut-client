import React, { Component } from "react";
import "./Index.css";

import { Form, Icon, Input, Button, Checkbox } from "antd";

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    };
    return (
      <div className="centerlize">
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{ width: 400 }}
        >
          <Form.Item
            {...formItemLayout}
            label="Name"
            hasFeedback
            validateStatus="success"
          >
            <Input placeholder="Size name" />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Quantity"
            hasFeedback
            validateStatus="success"
          >
            <Input style={{ width: "100%" }} placeholder="Quantity per size" />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="pull-right" href="">
              Forgot password
            </a>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <span className="d-block">
            Or <a href="">register now!</a>
          </span>
        </Form>
      </div>
    );
  }
}

export default Login;
