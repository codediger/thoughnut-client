import React, { Component, Fragment } from "react";
import { Button } from "antd";
import { Query } from "react-apollo";

import { GET_SIZES } from "../../../api/size";
import RowCard from "../../components/RowCard";
import SizeTable from "../../components/SizeTable";
import SizeModal from "../../components/SizeModal";
import Loading from "../../components/Loading";

class Size extends Component {
  state = {
    visible: false,
    formLayout: "horizontal",
    id: null,
    name: null,
    quantity: null,
    isCreate: true
  };

  clearForm = {
    id: null,
    name: null,
    quantity: null
  };

  clearFormAndClose = {
    ...this.clearForm,
    visible: false
  };

  showModal = () =>
    this.setState({
      visible: true
    });

  handleUpdateClick = ({ id, name, quantity }) => {
    this.setState({
      id,
      name,
      quantity,
      visible: true,
      isCreate: false
    });
  };

  handleModalCancel = () => {
    this.setState({ ...this.clearFormAndClose });
  };

  handleAfterClose = () => {
    this.setState({ isCreate: true });
  };

  handleAdd = mF => {
    const { name, quantity } = this.state;
    mF({ variables: { name, quantity: parseInt(quantity, 10) } });
    this.setState({ ...this.clearForm });
  };

  handleUpdate = mF => {
    const { id, name, quantity } = this.state;
    mF({ variables: { id, name, quantity: parseInt(quantity, 10) } });
    this.setState({ ...this.clearFormAndClose });
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { formLayout, visible, isCreate, name, quantity } = this.state;

    const sizeModalFormProps = {
      formLayout,
      name,
      quantity,
      handleInputChange: this.handleInputChange
    };

    const sizeTableProps = {
      handleUpdateClick: this.handleUpdateClick,
      handleUpdate: this.handleUpdate
    };

    const sideModalProps = {
      visible,
      sizeModalFormProps,
      isCreate,
      sizeName: name,
      handleModalCancel: this.handleModalCancel,
      handleAfterClose: this.handleAfterClose,
      handleAdd: this.handleAdd,
      handleUpdate: this.handleUpdate
    };
    return (
      <Fragment>
        <Button
          className="m-b-16"
          icon="plus"
          onClick={this.showModal}
          style={{ color: "#40a9ff" }}
        >
          Add
        </Button>
        <SizeModal {...sideModalProps} />
        <Query query={GET_SIZES}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <p>
                  <Loading loading={loading} />
                </p>
              );
            if (error) return <p>Couldn't get the list of sizes :(</p>;
            const dataSource = data.sizes.map(item => {
              return { ...item, key: item.id };
            });
            return <SizeTable sizes={dataSource} {...sizeTableProps} />;
          }}
        </Query>
      </Fragment>
    );
  }
}

export default RowCard(Size);
