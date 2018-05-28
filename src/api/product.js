import gql from "graphql-tag";
import { fragments as userFragment } from "./user";

export const fragments = {
  ProductDetails: gql`
    fragment ProductDetails on Product {
      id
      name
      shortDescription
      pricing {
        discountedPrice
        basePrice
      }
      pictures(first: 2) {
        url
      }
      createdBy {
        ...UserDetails
      }
    }
    ${userFragment.UserDetails}
  `,

  MiniProductDetails: gql`
    fragment MiniProductDetails on Product {
      id
      name
      pricing {
        discountedPrice
        basePrice
      }
      pictures(first: 1) {
        url
      }
    }
  `
};

export const GET_PRODUCTS = gql`
  {
    products {
      ...MiniProductDetails
    }
  }
  ${fragments.MiniProductDetails}
`;