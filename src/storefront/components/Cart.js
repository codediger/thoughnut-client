import React from "react";

import Card from "./Card";
import Header from "./Header";
import Flex, { Item } from "./Flex";
import Text from "./Text";
import Button from "./Button";
import CartList from "./CartList";
import "./Cart.css";

const Cart = props => {
  const {
    cart: { userCartItems }
  } = props;
  const totalPrice = userCartItems.reduce(
    (total, item) => total + item.total,
    0
  );
  return (
    <Flex column justifyContent="flex-start">
      <Flex>
        <div style={{ marginBottom: 16 }}>
          <Item grow width="60%">
            <Text as="h3">Your Cart</Text>
          </Item>
          <Item grow width="30%" justifyContent="flex-end">
            <Text as="h4">
              Subtotal:
              <span
                style={{ color: "red", paddingLeft: 8 }}
              >{`$${totalPrice.toFixed(2)}`}</span>
            </Text>
          </Item>
        </div>
      </Flex>
      <Flex column justifyContent="flex-start">
        <CartList cart={userCartItems} />
      </Flex>
      <Flex>
        {userCartItems.length > 0 && <Button width="100%">Checkout</Button>}
      </Flex>
    </Flex>
  );
};

export default Cart;
