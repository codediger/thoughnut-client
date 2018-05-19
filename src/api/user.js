import gql from "graphql-tag";

export const fragments = {
  UserDetails: gql`
    fragment UserDetails on User {
      id
      email
      firstName
      lastName
      phone
    }
  `
};

// export const GET_CUSTOMER = gql`
//   query Customer($id: ID!) {
//     customer(where: { id: $id }) {
//       ...UserDetails
//     }
//   }
//   ${fragments.userDetails}
// `;

export const GET_CUSTOMERS = gql`
  {
    users(where: { isAdmin: false }) {
      ...UserDetails
    }
  }
  ${fragments.UserDetails}
`;

export const GET_ADMINS = gql`
  {
    users(where: { isAdmin: true }) {
      ...UserDetails
    }
  }
  ${fragments.UserDetails}
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(
      data: { oldPassword: $oldPassword, newPassword: $newPassword }
    ) {
      id
    }
  }
`;

// export const CREATE_SIZE = gql`
//   mutation createSize($name: String!, $quantity: Int!) {
//     createSize(data: { name: $name, quantity: $quantity }) {
//       id
//       name
//       quantity
//     }
//   }
// `;

// export const UPDATE_SIZE = gql`
//   mutation updateSize($id: ID!, $name: String!, $quantity: Int!) {
//     updateSize(data: { name: $name, quantity: $quantity }, where: { id: $id }) {
//       id
//       name
//       quantity
//     }
//   }
// `;

// export const DELETE_SIZE = gql`
//   mutation deleteSize($id: ID!) {
//     deleteSize(where: { id: $id }) {
//       id
//       name
//       quantity
//     }
//   }
// `;
