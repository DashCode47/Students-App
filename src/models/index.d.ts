import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GradesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TopicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Class {
  readonly id: string;
  readonly name: string;
  readonly Students?: (Student | null)[] | null;
  readonly Subjects?: (Subject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Class, ClassMetaData>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

export declare class Student {
  readonly id: string;
  readonly name?: string | null;
  readonly lastName?: string | null;
  readonly avatar?: string | null;
  readonly Grades?: Grades | null;
  readonly classID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studentGradesId?: string | null;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class Grades {
  readonly id: string;
  readonly nota?: number | null;
  readonly Student?: Student | null;
  readonly topicID: string;
  readonly subjectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Grades, GradesMetaData>);
  static copyOf(source: Grades, mutator: (draft: MutableModel<Grades, GradesMetaData>) => MutableModel<Grades, GradesMetaData> | void): Grades;
}

export declare class Subject {
  readonly id: string;
  readonly nam: string;
  readonly teacher?: string | null;
  readonly Grades?: (Grades | null)[] | null;
  readonly Topics?: (Topic | null)[] | null;
  readonly classID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Subject, SubjectMetaData>);
  static copyOf(source: Subject, mutator: (draft: MutableModel<Subject, SubjectMetaData>) => MutableModel<Subject, SubjectMetaData> | void): Subject;
}

export declare class Topic {
  readonly id: string;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly Grades?: (Grades | null)[] | null;
  readonly subjectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Topic, TopicMetaData>);
  static copyOf(source: Topic, mutator: (draft: MutableModel<Topic, TopicMetaData>) => MutableModel<Topic, TopicMetaData> | void): Topic;
}