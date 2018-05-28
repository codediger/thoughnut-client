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
    customers {
      ...UserDetails
    }
  }
  ${fragments.UserDetails}
`;

export const GET_ADMINS = gql`
  {
    admins {
      ...UserDetails
    }
  }
  ${fragments.UserDetails}
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      id
    }
  }
`;

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      phone: $phone
    ) {
      token
    }
  }
`;
