import React from "react";

import Flex, { Item } from "./Flex";
import Image from "./Image";
import Text from "./Text";
import Icon from "./Icon";

const CartList = ({ cartItem }) => (
  <Flex style={{ marginBottom: 16, alignItems: "center" }}>
    <Item width="20%">
      <Image
        src={cartItem.pictures[0].url}
        alt={cartItem.name}
        style={{ width: 48, height: 48 }}
      />
    </Item>
    <Item grow width="60%">
      <Flex column justifyContent="flex-start">
        <Text as="h4" bold>
          {cartItem.name}
        </Text>
        <Item justifyContent="flex-start">
          <Text as="h5">{`$${cartItem.pricing.basePrice}`}</Text>
          <span style={{ paddingRight: 8 }} />
          <Text as="h5">Size - 6</Text>
        </Item>
      </Flex>
    </Item>
    <Item width="10%" justifyContent="flex-end">
      <Icon fa="fa-remove" />
    </Item>
  </Flex>
);

export default CartList;
