import { gql } from "@apollo/client";

export const listStudents = gql `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        avatar
        classID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentGradesId
      }
      nextToken
      startedAt
    }
  }
`;

export const getStudent = gql `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      lastName
      avatar
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentGradesId
    }
  }
`;

export const getStudent2 = gql `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      lastName
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentGradesId
    }
  }
`;

export const updateStudent = gql `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentGradesId
    }
  }
`;

export const getClass = gql `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      name
      id
      Students {
        items {
          name
          lastName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
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


