/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInput = /* GraphQL */ `
  subscription OnCreateInput(
    $filter: ModelSubscriptionInputFilterInput
    $owner: String
  ) {
    onCreateInput(filter: $filter, owner: $owner) {
      id
      question
      answer
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateInput = /* GraphQL */ `
  subscription OnUpdateInput(
    $filter: ModelSubscriptionInputFilterInput
    $owner: String
  ) {
    onUpdateInput(filter: $filter, owner: $owner) {
      id
      question
      answer
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteInput = /* GraphQL */ `
  subscription OnDeleteInput(
    $filter: ModelSubscriptionInputFilterInput
    $owner: String
  ) {
    onDeleteInput(filter: $filter, owner: $owner) {
      id
      question
      answer
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateMBTI = /* GraphQL */ `
  subscription OnCreateMBTI(
    $filter: ModelSubscriptionMBTIFilterInput
    $owner: String
  ) {
    onCreateMBTI(filter: $filter, owner: $owner) {
      mbti
      type
      mind
      id
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateMBTI = /* GraphQL */ `
  subscription OnUpdateMBTI(
    $filter: ModelSubscriptionMBTIFilterInput
    $owner: String
  ) {
    onUpdateMBTI(filter: $filter, owner: $owner) {
      mbti
      type
      mind
      id
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteMBTI = /* GraphQL */ `
  subscription OnDeleteMBTI(
    $filter: ModelSubscriptionMBTIFilterInput
    $owner: String
  ) {
    onDeleteMBTI(filter: $filter, owner: $owner) {
      mbti
      type
      mind
      id
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
