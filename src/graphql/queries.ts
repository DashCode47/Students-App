/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      name
      Students {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Students {
          nextToken
          startedAt
        }
        Subjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        Students {
          nextToken
          startedAt
        }
        Subjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
      id
      nam
      teacher
      Grades {
        items {
          id
          nota
          studentID
          topicID
          subjectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Topics {
        items {
          id
          name
          date
          subjectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nam
        teacher
        Grades {
          nextToken
          startedAt
        }
        Topics {
          nextToken
          startedAt
        }
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
  }
`;
export const syncSubjects = /* GraphQL */ `
  query SyncSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nam
        teacher
        Grades {
          nextToken
          startedAt
        }
        Topics {
          nextToken
          startedAt
        }
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
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      name
      date
      Grades {
        items {
          id
          nota
          studentID
          topicID
          subjectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      subjectID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        Grades {
          nextToken
          startedAt
        }
        subjectID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTopics = /* GraphQL */ `
  query SyncTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTopics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        date
        Grades {
          nextToken
          startedAt
        }
        subjectID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      lastName
      avatar
      Grades {
        id
        nota
        studentID
        Student {
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
        topicID
        subjectID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
export const listStudents = /* GraphQL */ `
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
        Grades {
          id
          nota
          studentID
          topicID
          subjectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        lastName
        avatar
        Grades {
          id
          nota
          studentID
          topicID
          subjectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
export const getGrades = /* GraphQL */ `
  query GetGrades($id: ID!) {
    getGrades(id: $id) {
      id
      nota
      studentID
      Student {
        id
        name
        lastName
        avatar
        Grades {
          id
          nota
          studentID
          topicID
          subjectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        classID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentGradesId
      }
      topicID
      subjectID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGrades = /* GraphQL */ `
  query ListGrades(
    $filter: ModelGradesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nota
        studentID
        Student {
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
        topicID
        subjectID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGrades = /* GraphQL */ `
  query SyncGrades(
    $filter: ModelGradesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGrades(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nota
        studentID
        Student {
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
        topicID
        subjectID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
