import React from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

const SizeModalForm = props => {
  const { handleInputChange, required, formLayout, name, quantity } = props;
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
      : null;
  return (
    <Form>
      <Form.Item
        {...formItemLayout}
        label="Name"
        hasFeedback
        aria-label={"Size Name"}
      >
        <Input
          aria-label={"Size Name Input"}
          aria-required="true"
          placeholder="Size name"
          value={name}
          name="name"
          onChange={handleInputChange}
          required={required.name ? true : false}
        />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label="Quantity"
        hasFeedback
        aria-label={"Size Quantity"}
      >
        <Input
          aria-label={"Quantity per Size"}
          aria-required="true"
          placeholder="Quantity per Size"
          value={quantity}
          name="quantity"
          type="number"
          onChange={handleInputChange}
          required={required.quantity ? true : false}
        />
      </Form.Item>
    </Form>
  );
};

SizeModalForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  required: PropTypes.shape({
    name: PropTypes.bool,
    quantity: PropTypes.bool
  }),
  formLayout: PropTypes.string
};

export default SizeModalForm;
