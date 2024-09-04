import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

function sendResponse<T>(data: T): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  };
}

function sendError(
  statusCode: number = 400,
  message: string
): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode: statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
    }),
  };
}

export { sendResponse, sendError };
