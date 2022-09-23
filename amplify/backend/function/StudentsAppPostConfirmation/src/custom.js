/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const env = process.env.ENV;
const AppsyncID = process.env.API_STUDENTSAPP_GRAPHQLAPIIDOUTPUT;
const TableName = 'Student-43gtrwrgbzhyxkyi7mxuv4nvmy-staging';

const userExist = async id => {
  const params = {
    TableName,
    Key: id,
  };
  try {
    const response = await docClient.get(params).promise();
    return !!response?.Item;
  } catch (e) {
    return false;
  }
};

const saveUser = async user => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    ...user,
    __typename: 'Student',
    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
  };
  const params = {
    TableName,
    Item,
  };
  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};

exports.handler = async (event, context) => {
  if (!event?.request?.userAttributes) {
    console.warn('not User ');
    return;
  }
  const {sub, name, email, family_name} = event.request.userAttributes;

  const newUser = {
    id: sub,
    name,
    email,
    lastName: family_name,
  };
  if (!(await userExist(newUser.id))) {
    await saveUser(newUser);
    console.warn(`Student ${newUser.id} saved succesfuly`);
  } else {
    console.warn(`Student ${newUser.id} already exists`);
  }
  return event;
};
