/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInput = /* GraphQL */ `
  mutation CreateInput(
    $input: CreateInputInput!
    $condition: ModelInputConditionInput
  ) {
    createInput(input: $input, condition: $condition) {
      id
      question
      answer
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
