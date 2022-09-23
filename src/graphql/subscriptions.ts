/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject {
    onCreateSubject {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject {
    onUpdateSubject {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject {
    onDeleteSubject {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateGrades = /* GraphQL */ `
  subscription OnCreateGrades {
    onCreateGrades {
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
export const onUpdateGrades = /* GraphQL */ `
  subscription OnUpdateGrades {
    onUpdateGrades {
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
export const onDeleteGrades = /* GraphQL */ `
  subscription OnDeleteGrades {
    onDeleteGrades {
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
