import React, { Component } from "react";

import RowCard from "../../components/RowCard";
import EditableTable from "../../components/EditableTable";

class Order extends Component {
  render() {
    return <EditableTable />;
  }
}

export default RowCard(Order);
