import React from "react";
import { Mutation } from "react-apollo";
import { Modal, Button, Alert } from "antd";

import { GET_SIZES, CREATE_SIZE, UPDATE_SIZE } from "../../api/size";
import Loading from "./Loading";
import SizeModalForm from "./SizeModalForm";
import Notify from "./Notify";

const SizeModal = props => {
  const {
    visible,
    handleAfterClose,
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
  const errorType = isCreate ? "creating" : "updating";
  const completedType = isCreate ? "created" : "updated";

  return (
    <Mutation
      mutation={mutation}
      update={update}
      onCompleted={() =>
        Notify("success", "Success", `Size successfully ${completedType}`)
      }
      onError={() =>
        Notify("error", "Error", `An error occured while ${errorType} the size`)
      }
    >
      {(mutationFunction, { loading, error }) => (
        <Modal
          title={isCreate ? "Add Size" : `Update Size for ${sizeName}`}
          visible={visible}
          onCancel={handleModalCancel}
          afterClose={handleAfterClose}
          footer={[
            <Button key="cancel" onClick={handleModalCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              confirmLoading={loading}
              onClick={() => callbackFunction(mutationFunction)}
            >
              Submit
            </Button>
          ]}
        >
          <SizeModalForm {...sizeModalFormProps} required={required} />
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
