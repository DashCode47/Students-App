// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Class, Student, Grades, Subject, Topic } = initSchema(schema);

export {
  Class,
  Student,
  Grades,
  Subject,
  Topic
};