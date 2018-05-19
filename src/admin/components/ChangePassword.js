import React from "react";
import { Form, Input, Button } from "antd";
import { Mutation } from "react-apollo";

import { CHANGE_PASSWORD } from "../../api/user";
import Notify from "./Notify";

const ChangePassword = props => {
  const { handleInputChange, handleChangePasswordSubmit } = props;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };
  return (
    <Mutation
      mutation={CHANGE_PASSWORD}
      onCompleted={() =>
        Notify("success", "Success", "Password changed successfully")
      }
    >
      {(changePassword, { loading, error }) => (
        <Form onSubmit={() => handleChangePasswordSubmit(changePassword)}>
          <Form.Item
            {...formItemLayout}
            label="Old password"
            hasFeedback
            aria-label={"Old password"}
          >
            <Input
              aria-label={"Old password Input"}
              aria-required="true"
              placeholder="Old password"
              name="oldPassword"
              onChange={handleInputChange}
              required={true}
            />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="New password"
            hasFeedback
            aria-label={"New password"}
          >
            <Input
              aria-label={"New password Input"}
              aria-required="true"
              placeholder="New password"
              name="newPassword"
              onChange={handleInputChange}
              required={true}
            />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Confirm New password"
            hasFeedback
            aria-label={"Confirm New password"}
          >
            <Input
              aria-label={"Confirm New password"}
              aria-required="true"
              placeholder="Confirm New password"
              name="cNewPassword"
              onChange={handleInputChange}
              required={true}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Mutation>
  );
};

export default ChangePassword;
