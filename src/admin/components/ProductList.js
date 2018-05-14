import React, { Component } from "react";
import { List, Card, Icon, Avatar } from "antd";

import EditableTable from "./EditableTable";

const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];

class ProductList extends React.Component {
  render() {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              cover={
                <img
                  alt="example"
                  src="http://res.cloudinary.com/orinami/image/upload/v1525710936/photo-1509474458352-109268893243_ydp0n3.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
              <Card.Meta
                description="This is the description"
              />
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default ProductList;
