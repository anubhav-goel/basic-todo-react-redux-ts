export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const GET_TODOS = "GET_TODOS";

export interface TodoState {
  todos: Todo[];
}

export interface GetTodoAction {
  type: typeof GET_TODOS;
  payload: Todo[];
}

export type TodoActions = GetTodoAction;
