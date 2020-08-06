import { Dispatch } from "redux";
import { GetTodoAction, Todo, GET_TODOS } from "../types/todo";
import axios from "axios";

export const getTodoByUser = (userId: number) => async (
  dispatch: Dispatch<GetTodoAction>
) => {
  const todos = await axios.get<Todo[]>(
    `http://localhost:9000/todos?userId=${userId}`
  );

  return dispatch({
    type: GET_TODOS,
    payload: todos.data,
  });
};
