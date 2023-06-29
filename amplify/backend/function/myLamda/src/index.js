/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// ORIGIN //

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };


///

// import { AWS } from '@aws-sdk/client-dynamodb';
// const docClient = new AWS.DynamoDB.DocumentClient();

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

// const params = {
//   TableName : 'InputTable',
//   /* Item properties will depend on your application concerns */
//   Key: {
//     id: '1'
//   }
// }

// exports.handler = async (event, context) => {
//   try {
//     const data = await docClient.get(params).promise()
//     // await docClient.put(params).promise();
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify(data)
//     };
//     return response;
//   } catch (err) {
//     return { error: err }
//   }
// };
