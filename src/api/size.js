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
    sizes {
      id
      name
      quantity
    }
  }
`;

export const CREATE_SIZE = gql`
  mutation createSize($name: String!, $quantity: Int!) {
    createSize(name: $name, quantity: $quantity) {
      id
      name
      quantity
    }
  }
`;

export const UPDATE_SIZE = gql`
  mutation updateSize($id: ID!, $name: String!, $quantity: Int!) {
    updateSize(id: $id, name: $name, quantity: $quantity) {
      id
      name
      quantity
    }
  }
`;

export const DELETE_SIZE = gql`
  mutation deleteSize($id: ID!) {
    deleteSize(id: $id) {
      id
      name
      quantity
    }
  }
`;
