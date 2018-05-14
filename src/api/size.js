import gql from "graphql-tag";

export const GET_SIZE = gql`
  {
    sizes {
      id
      name
      quantity
    }
  }
`;

export const GET_SIZES = gql`
  {
    sizes(orderBy: quantity_ASC) {
      id
      name
      quantity
    }
  }
`;

export const CREATE_SIZE = gql`
  mutation createSize($name: String!, $quantity: Int!) {
    createSize(data: { name: $name, quantity: $quantity }) {
      id
      name
      quantity
    }
  }
`;

export const DELETE_SIZE = gql`
  mutation deleteSize($id: ID!) {
    deleteSize(where: { id: $id }) {
      id
      name
      quantity
    }
  }
`;
