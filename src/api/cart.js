import gql from "graphql-tag";
import { fragments as productFragment } from "./product";

const fragments = {
  cartItemFragment: gql`
    fragment cartItemFragment on CartItem {
      id
      product {
        ...MiniProductDetails
      }
      size {
        name
        quantity
      }
      quantity
      total
    }
    ${productFragment.MiniProductDetails}
  `
};

export const GET_CART = gql`
  {
    userCartItems {
      ...cartItemFragment
    }
  }
  ${fragments.cartItemFragment}
`;

export const ADD_TO_CART = gql`
  mutation addToCart(
    $productId: ID!
    $sizeId: ID!
    $quantity: Int!
    $total: Float!
  ) {
    addToCart(
      productId: $productId
      sizeId: $sizeId
      quantity: $quantity
      total: $total
    ) {
      ...cartItemFragment
    }
  }
  ${fragments.cartItemFragment}
`;

export const DELETE_CART_ITEM = gql`
  mutation deleteCartItem($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
