/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      num
      context
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        num
        context
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      num
      subject
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        num
        subject
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMBTI = /* GraphQL */ `
  query GetMBTI($id: ID!) {
    getMBTI(id: $id) {
      mbti
      type
      mind
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMBTIS = /* GraphQL */ `
  query ListMBTIS(
    $filter: ModelMBTIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMBTIS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        mbti
        type
        mind
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
