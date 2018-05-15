import React from "react";
import { Mutation } from "react-apollo";
import { Modal, Button, Alert } from "antd";

import { GET_SIZES, CREATE_SIZE, UPDATE_SIZE } from "../../api/size";
import Loading from "./Loading";
import SizeModalForm from "./SizeModalForm";

const SizeModal = props => {
  const {
    visible,
    loading,
    handleModalCancel,
    handleAdd,
    handleUpdate,
    sizeModalFormProps,
    isCreate,
    sizeName
  } = props;

  const required = isCreate
    ? {
        name: true,
        quantity: true
      }
    : {};

  const update = isCreate
    ? (cache, { data: { createSize } }) => {
        const { sizes } = cache.readQuery({ query: GET_SIZES });
        cache.writeQuery({
          query: GET_SIZES,
          data: { sizes: sizes.concat([createSize]) }
        });
      }
    : null;

  const callbackFunction = isCreate ? handleAdd : handleUpdate;
  const mutation = isCreate ? CREATE_SIZE : UPDATE_SIZE;

  return (
    <Mutation mutation={mutation} update={update}>
      {(mutationFunction, { loading, error }) => (
        <Modal
          title={isCreate ? "Add Size" : `Update Size for ${sizeName}`}
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
              onClick={() => callbackFunction(mutationFunction)}
            >
              Submit
            </Button>
          ]}
        >
          <Loading loading={loading}>
            <SizeModalForm {...sizeModalFormProps} required={required} />
          </Loading>
          {/* {!error && (
            <Alert
              message="Success"
              description="Size created"
              type="success"
              showIcon
              closable
            />
          )} */}
          {error && (
            <Alert
              message="Error"
              description=" Check your entry, the size or quantity may already exist"
              type="error"
              showIcon
              closable
            />
          )}
        </Modal>
      )}
    </Mutation>
  );
};

export default SizeModal;
