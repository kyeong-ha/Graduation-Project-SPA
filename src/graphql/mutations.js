/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      num
      context
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      num
      context
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      num
      context
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      num
      subject
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      num
      subject
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      num
      subject
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMBTI = /* GraphQL */ `
  mutation CreateMBTI(
    $input: CreateMBTIInput!
    $condition: ModelMBTIConditionInput
  ) {
    createMBTI(input: $input, condition: $condition) {
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
export const updateMBTI = /* GraphQL */ `
  mutation UpdateMBTI(
    $input: UpdateMBTIInput!
    $condition: ModelMBTIConditionInput
  ) {
    updateMBTI(input: $input, condition: $condition) {
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
export const deleteMBTI = /* GraphQL */ `
  mutation DeleteMBTI(
    $input: DeleteMBTIInput!
    $condition: ModelMBTIConditionInput
  ) {
    deleteMBTI(input: $input, condition: $condition) {
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
