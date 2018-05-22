import React from "react";
import { List, Card, Icon, Avatar } from "antd";
import PropTypes from "prop-types";

const ProductListItem = ({ item }) => (
  <List.Item>
    <Card
      style={{ width: 250, textAlign: "center" }}
      cover={<img alt={item.name} src={item.pictures[0].url} style={{ height: 160 }}/>}
      actions={[<Icon type="setting" />, <Icon type="edit" />]}
    >
      <Card.Meta description={item.name} style={{ height: 40 }} />
    </Card>
  </List.Item>
);

ProductListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ProductListItem;
