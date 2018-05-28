import React from "react";
import { Mutation } from "react-apollo";

import Flex, { Item } from "./Flex";
import Image from "./Image";
import Text from "./Text";
import Icon from "./Icon";
import { DELETE_CART_ITEM, GET_CART } from "../../api/cart";

const CartList = ({ cartItem }) => (
  <Flex style={{ marginBottom: 16 }} alignContent="flex-start">
    <Item width="20%">
      <Image
        src={cartItem.product.pictures[0].url}
        alt={cartItem.product.name}
        style={{ width: 56, height: 56 }}
      />
    </Item>
    <Item grow width="60%">
      <Item column>
        <Text as="h4" bold>
          {cartItem.product.name}
        </Text>
        <Item shrink justifyContent="flex-start">
          <Text
            as="h5"
            style={{ paddingRight: 8 }}
          >{`$${cartItem.product.pricing.basePrice.toFixed(2)}`}</Text>
          <Text as="h5">
            Size: {`${cartItem.size.name} - ${cartItem.size.quantity}`}
          </Text>
        </Item>
        <Item shrink>
          <Text as="h5">Quantity: {cartItem.quantity}</Text>
        </Item>
      </Item>
    </Item>
    <Item width="10%" justifyContent="flex-end">
      <Item column>
        <Text as="h5" style={{ paddingButtom: 32 }}>
          {`$${cartItem.total.toFixed(2)}`}
        </Text>
        <Item column grow justifyContent="center" width="auto">
          <Mutation
            mutation={DELETE_CART_ITEM}
            update={(cache, { data: { deleteCartItem } }) => {
              const { userCartItems } = cache.readQuery({ query: GET_CART });
              const cartItems = userCartItems.filter(i => i.id !== cartItem.id);
              cache.writeQuery({
                query: GET_CART,
                data: { userCartItems: cartItems }
              });
            }}
            onError={error => console.log(error)}
          >
            {(mutationFunction, { loading }) => (
              <Icon
                fa="fa-remove"
                style={{ textAlign: "center" }}
                onClick={() =>
                  mutationFunction({ variables: { id: cartItem.id } })
                }
              />
            )}
          </Mutation>
        </Item>
      </Item>
    </Item>
  </Flex>
);

export default CartList;
