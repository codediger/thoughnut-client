import React, { Component } from "react";
import { DatePicker, Tabs } from "antd";
import { Query } from "react-apollo";
import "./Home.css";

import { GET_CUSTOMERS, GET_ADMINS } from "../../../api/user";
import ManageAdmin from "../../components/ManageAdmin";
import ManageCustomer from "../../components/ManageCustomer";
import RowCard from "../../components/RowCard";
import ErrorBoundary from "../../../components/ErrorBoundary";
import Loading from "../../components/Loading";

class User extends Component {
  callback = key => {
    console.log(key);
  };

  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <Tabs.TabPane tab="Manage Customers" key="1">
          <ErrorBoundary>
            <Query query={GET_CUSTOMERS}>
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <p>
                      <Loading loading={loading} />
                    </p>
                  );
                if (error) return <p>Couldn't get the list of customers :(</p>;
                const dataSource = data.customers.map(item => {
                  return { ...item, key: item.id };
                });
                return <ManageCustomer customers={dataSource} />;
              }}
            </Query>
          </ErrorBoundary>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Manage Admins" key="2">
          <ErrorBoundary>
            <Query query={GET_ADMINS}>
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <p>
                      <Loading loading={loading} />
                    </p>
                  );
                if (error) return <p>Couldn't get the list of admins :(</p>;
                const dataSource = data.admins.map(item => {
                  return { ...item, key: item.id };
                });
                return <ManageAdmin admin={dataSource} />;
              }}
            </Query>
          </ErrorBoundary>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default RowCard(User);
