import React, { Fragment } from "react";

import CartListItem from "./CartListItem";

const CartList = ({ cart }) => (
  <Fragment>
    {cart.map(item => <CartListItem cartItem={item} key={item.id} />)}
  </Fragment>
);

export default CartList;
