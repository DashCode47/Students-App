import { gql } from "@apollo/client";

export const getClass = gql `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      Subjects {
        items {
          id
          nam
          teacher
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;