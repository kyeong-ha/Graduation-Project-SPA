/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { BatchGetCommand, DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { BatchGetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


exports.handler = async () => {
  const command = new BatchGetCommand({
    RequestItems: {
      InputTable: {
        // Each entry in Keys is an object that specifies a primary key.
        Keys: [
          {
            id: "1",
          },
        ],
        // Only return the "Title" and "PageCount" attributes.
        ProjectionExpression: "question, answer",
      },
    },
  });

  const response = await docClient.send(command);
  console.log(response.Responses["InputTable"]);
  return response;
}