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
const AWS = require("@aws-sdk/client-dynamodb");
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName : 'InputTable',
  /* Item properties will depend on your application concerns */
  Key: {
     id: '1'
  }
}

exports.handler = async (event, context) => {
  try {
    const data = await docClient.get(params).promise()
    // await docClient.put(params).promise();
    const response = {
        statusCode: 200,
        body: JSON.stringify(data)
    };
    return response;
  } catch (err) {
    return { error: err }
  }
};
