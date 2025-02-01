const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-east-2" });
const dynamoDB = DynamoDBDocumentClient.from(client);

module.exports = { dynamoDB, ScanCommand };
