/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInput = /* GraphQL */ `
  subscription OnCreateInput($filter: ModelSubscriptionInputFilterInput) {
    onCreateInput(filter: $filter) {
      id
      question
      answer
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMBTI = /* GraphQL */ `
  subscription OnCreateMBTI($filter: ModelSubscriptionMBTIFilterInput) {
    onCreateMBTI(filter: $filter) {
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
export const onUpdateMBTI = /* GraphQL */ `
  subscription OnUpdateMBTI($filter: ModelSubscriptionMBTIFilterInput) {
    onUpdateMBTI(filter: $filter) {
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
export const onDeleteMBTI = /* GraphQL */ `
  subscription OnDeleteMBTI($filter: ModelSubscriptionMBTIFilterInput) {
    onDeleteMBTI(filter: $filter) {
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
