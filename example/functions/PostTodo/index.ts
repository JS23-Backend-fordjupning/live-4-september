import { sendResponse, sendError } from '../../responses/index';
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda';
import { Todo } from '../../types';

const todos: Todo[] = [
  { id: 1, todo: 'Köp kaffe ' },
  { id: 2, todo: 'Köp kaka ' },
  { id: 3, todo: 'Brygg kaffe ' },
  { id: 4, todo: 'Drick kaffe ' },
];

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  if (!event.body) return sendError(400, 'Missing required body');

  const todo: Todo = JSON.parse(event.body);

  todos.push(todo);

  return sendResponse(todos);
};
