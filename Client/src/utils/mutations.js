import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    addUser(
      username: $username
      password: $password
      email: $email

    ) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
export const ADD_WORKOUT = gql`
mutation Mutation($userId: ID!, $exerciseTypes: String!, $reps: Int!, $sets: Int!) {
  addWorkout(userId: $userId, exerciseTypes: $exerciseTypes, reps: $reps, sets: $sets) {
    _id
    exerciseTypes
    reps
    sets
  }
}`;