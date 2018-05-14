import React from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import { Mutation } from "react-apollo";

import { GET_SIZES, CREATE_SIZE } from "../../api/size";
import Loading from "./Loading";

const SizeAddModal = props => {
  const {
    formLayout,
    visible,
    loading,
    handleModalCancel,
    handleAdd,
    handleInputChange
  } = props;
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
      : null;
  return (
    <Mutation
      mutation={CREATE_SIZE}
      update={(cache, { data: { createSize } }) => {
        const { sizes } = cache.readQuery({ query: GET_SIZES });
        cache.writeQuery({
          query: GET_SIZES,
          data: { sizes: sizes.concat([createSize]) }
        });
      }}
    >
      {(createSize, { loading, error }) => (
        <Modal
          title="Add Size"
          visible={visible}
          onCancel={handleModalCancel}
          footer={[
            <Button key="cancel" onClick={handleModalCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={() => handleAdd(createSize)}
            >
              Submit
            </Button>
          ]}
        >
          <Loading loading={loading}>
            <Form>
              <Form.Item {...formItemLayout} label="Name" hasFeedback>
                <Input
                  placeholder="Size name"
                  name="name"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Quantity" hasFeedback>
                <Input
                  placeholder="Quantity per Size"
                  name="quantity"
                  type="number"
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Form>
          </Loading>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>
              Check your entry, the size or quantity may already exist
            </p>
          )}
        </Modal>
      )}
    </Mutation>
  );
};

export default SizeAddModal;
