/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createGrades = /* GraphQL */ `
  mutation CreateGrades(
    $input: CreateGradesInput!
    $condition: ModelGradesConditionInput
  ) {
    createGrades(input: $input, condition: $condition) {
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
export const updateGrades = /* GraphQL */ `
  mutation UpdateGrades(
    $input: UpdateGradesInput!
    $condition: ModelGradesConditionInput
  ) {
    updateGrades(input: $input, condition: $condition) {
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
export const deleteGrades = /* GraphQL */ `
  mutation DeleteGrades(
    $input: DeleteGradesInput!
    $condition: ModelGradesConditionInput
  ) {
    deleteGrades(input: $input, condition: $condition) {
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
