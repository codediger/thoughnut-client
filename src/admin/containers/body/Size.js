import React, { Component, Fragment } from "react";
import { Button } from "antd";
import { Query } from "react-apollo";

import { GET_SIZES } from "../../../api/size";
import RowCard from "../../components/RowCard";
import SizeTable from "../../components/SizeTable";
import SizeAddModal from "../../components/SizeAddModal";
import Loading from "../../components/Loading";

class Size extends Component {
  state = {
    loading: false,
    visible: false,
    formLayout: "horizontal",
    name: null,
    quantity: null
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleModalCancel = () =>
    this.setState({
      visible: false
    });

  handleUpdate = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = createSize => {
    const { name, quantity } = this.state;
    createSize({ variables: { name, quantity: parseInt(quantity, 10) } });
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { formLayout, visible, loading } = this.state;
    const sizeTableProps = {
      showModal: this.showModal,
      handleUpdate: this.handleUpdate
    };
    const sideAddModalProps = {
      formLayout,
      visible,
      loading,
      handleModalCancel: this.handleModalCancel,
      handleAdd: this.handleAdd,
      handleInputChange: this.handleInputChange
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
        <SizeAddModal {...sideAddModalProps} />
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
