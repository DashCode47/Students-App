/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateClassInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  Students?: ModelStudentConnection | null,
  Subjects?: ModelSubjectConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name?: string | null,
  lastName?: string | null,
  avatar?: string | null,
  Grades?: Grades | null,
  classID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  studentGradesId?: string | null,
};

export type Grades = {
  __typename: "Grades",
  id: string,
  nota?: number | null,
  studentID: string,
  Student?: Student | null,
  topicID: string,
  subjectID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items:  Array<Subject | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Subject = {
  __typename: "Subject",
  id: string,
  nam: string,
  teacher?: string | null,
  Grades?: ModelGradesConnection | null,
  Topics?: ModelTopicConnection | null,
  classID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelGradesConnection = {
  __typename: "ModelGradesConnection",
  items:  Array<Grades | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection",
  items:  Array<Topic | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Topic = {
  __typename: "Topic",
  id: string,
  name?: string | null,
  date?: string | null,
  Grades?: ModelGradesConnection | null,
  subjectID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteClassInput = {
  id: string,
  _version?: number | null,
};

export type CreateSubjectInput = {
  id?: string | null,
  nam: string,
  teacher?: string | null,
  classID: string,
  _version?: number | null,
};

export type ModelSubjectConditionInput = {
  nam?: ModelStringInput | null,
  teacher?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSubjectInput = {
  id: string,
  nam?: string | null,
  teacher?: string | null,
  classID?: string | null,
  _version?: number | null,
};

export type DeleteSubjectInput = {
  id: string,
  _version?: number | null,
};

export type CreateTopicInput = {
  id?: string | null,
  name?: string | null,
  date?: string | null,
  subjectID: string,
  _version?: number | null,
};

export type ModelTopicConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  subjectID?: ModelIDInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type UpdateTopicInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  subjectID?: string | null,
  _version?: number | null,
};

export type DeleteTopicInput = {
  id: string,
  _version?: number | null,
};

export type CreateStudentInput = {
  id?: string | null,
  name?: string | null,
  lastName?: string | null,
  avatar?: string | null,
  classID: string,
  _version?: number | null,
  studentGradesId?: string | null,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  studentGradesId?: ModelIDInput | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  lastName?: string | null,
  avatar?: string | null,
  classID?: string | null,
  _version?: number | null,
  studentGradesId?: string | null,
};

export type DeleteStudentInput = {
  id: string,
  _version?: number | null,
};

export type CreateGradesInput = {
  id?: string | null,
  nota?: number | null,
  studentID: string,
  topicID: string,
  subjectID: string,
  _version?: number | null,
};

export type ModelGradesConditionInput = {
  nota?: ModelFloatInput | null,
  studentID?: ModelIDInput | null,
  topicID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  and?: Array< ModelGradesConditionInput | null > | null,
  or?: Array< ModelGradesConditionInput | null > | null,
  not?: ModelGradesConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGradesInput = {
  id: string,
  nota?: number | null,
  studentID?: string | null,
  topicID?: string | null,
  subjectID?: string | null,
  _version?: number | null,
};

export type DeleteGradesInput = {
  id: string,
  _version?: number | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  nam?: ModelStringInput | null,
  teacher?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  subjectID?: ModelIDInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
  studentGradesId?: ModelIDInput | null,
};

export type ModelGradesFilterInput = {
  id?: ModelIDInput | null,
  nota?: ModelFloatInput | null,
  studentID?: ModelIDInput | null,
  topicID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  and?: Array< ModelGradesFilterInput | null > | null,
  or?: Array< ModelGradesFilterInput | null > | null,
  not?: ModelGradesFilterInput | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Subjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        nam: string,
        teacher?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Subjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        nam: string,
        teacher?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Subjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        nam: string,
        teacher?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    nam: string,
    teacher?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Topics?:  {
      __typename: "ModelTopicConnection",
      items:  Array< {
        __typename: "Topic",
        id: string,
        name?: string | null,
        date?: string | null,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "Subject",
    id: string,
    nam: string,
    teacher?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Topics?:  {
      __typename: "ModelTopicConnection",
      items:  Array< {
        __typename: "Topic",
        id: string,
        name?: string | null,
        date?: string | null,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "Subject",
    id: string,
    nam: string,
    teacher?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Topics?:  {
      __typename: "ModelTopicConnection",
      items:  Array< {
        __typename: "Topic",
        id: string,
        name?: string | null,
        date?: string | null,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    date?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    date?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    date?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    Grades?:  {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    studentGradesId?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    Grades?:  {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    studentGradesId?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    Grades?:  {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    studentGradesId?: string | null,
  } | null,
};

export type CreateGradesMutationVariables = {
  input: CreateGradesInput,
  condition?: ModelGradesConditionInput | null,
};

export type CreateGradesMutation = {
  createGrades?:  {
    __typename: "Grades",
    id: string,
    nota?: number | null,
    studentID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null,
    topicID: string,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGradesMutationVariables = {
  input: UpdateGradesInput,
  condition?: ModelGradesConditionInput | null,
};

export type UpdateGradesMutation = {
  updateGrades?:  {
    __typename: "Grades",
    id: string,
    nota?: number | null,
    studentID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null,
    topicID: string,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGradesMutationVariables = {
  input: DeleteGradesInput,
  condition?: ModelGradesConditionInput | null,
};

export type DeleteGradesMutation = {
  deleteGrades?:  {
    __typename: "Grades",
    id: string,
    nota?: number | null,
    studentID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null,
    topicID: string,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Subjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        nam: string,
        teacher?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      Students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Subjects?:  {
        __typename: "ModelSubjectConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClassesQuery = {
  syncClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      Students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Subjects?:  {
        __typename: "ModelSubjectConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "Subject",
    id: string,
    nam: string,
    teacher?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Topics?:  {
      __typename: "ModelTopicConnection",
      items:  Array< {
        __typename: "Topic",
        id: string,
        name?: string | null,
        date?: string | null,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      nam: string,
      teacher?: string | null,
      Grades?:  {
        __typename: "ModelGradesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Topics?:  {
        __typename: "ModelTopicConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSubjectsQuery = {
  syncSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      nam: string,
      teacher?: string | null,
      Grades?:  {
        __typename: "ModelGradesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Topics?:  {
        __typename: "ModelTopicConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    date?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      name?: string | null,
      date?: string | null,
      Grades?:  {
        __typename: "ModelGradesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTopicsQuery = {
  syncTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      name?: string | null,
      date?: string | null,
      Grades?:  {
        __typename: "ModelGradesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    Grades?:  {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    studentGradesId?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStudentsQuery = {
  syncStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGradesQueryVariables = {
  id: string,
};

export type GetGradesQuery = {
  getGrades?:  {
    __typename: "Grades",
    id: string,
    nota?: number | null,
    studentID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null,
    topicID: string,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGradesQueryVariables = {
  filter?: ModelGradesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGradesQuery = {
  listGrades?:  {
    __typename: "ModelGradesConnection",
    items:  Array< {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGradesQueryVariables = {
  filter?: ModelGradesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGradesQuery = {
  syncGrades?:  {
    __typename: "ModelGradesConnection",
    items:  Array< {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Subjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        nam: string,
        teacher?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Subjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        nam: string,
        teacher?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Subjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        nam: string,
        teacher?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    nam: string,
    teacher?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Topics?:  {
      __typename: "ModelTopicConnection",
      items:  Array< {
        __typename: "Topic",
        id: string,
        name?: string | null,
        date?: string | null,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    nam: string,
    teacher?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Topics?:  {
      __typename: "ModelTopicConnection",
      items:  Array< {
        __typename: "Topic",
        id: string,
        name?: string | null,
        date?: string | null,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    nam: string,
    teacher?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Topics?:  {
      __typename: "ModelTopicConnection",
      items:  Array< {
        __typename: "Topic",
        id: string,
        name?: string | null,
        date?: string | null,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    date?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    date?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    date?: string | null,
    Grades?:  {
      __typename: "ModelGradesConnection",
      items:  Array< {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    Grades?:  {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    studentGradesId?: string | null,
  } | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    Grades?:  {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    studentGradesId?: string | null,
  } | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    Grades?:  {
      __typename: "Grades",
      id: string,
      nota?: number | null,
      studentID: string,
      Student?:  {
        __typename: "Student",
        id: string,
        name?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        studentGradesId?: string | null,
      } | null,
      topicID: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    studentGradesId?: string | null,
  } | null,
};

export type OnCreateGradesSubscription = {
  onCreateGrades?:  {
    __typename: "Grades",
    id: string,
    nota?: number | null,
    studentID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null,
    topicID: string,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGradesSubscription = {
  onUpdateGrades?:  {
    __typename: "Grades",
    id: string,
    nota?: number | null,
    studentID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null,
    topicID: string,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGradesSubscription = {
  onDeleteGrades?:  {
    __typename: "Grades",
    id: string,
    nota?: number | null,
    studentID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      Grades?:  {
        __typename: "Grades",
        id: string,
        nota?: number | null,
        studentID: string,
        topicID: string,
        subjectID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      studentGradesId?: string | null,
    } | null,
    topicID: string,
    subjectID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
