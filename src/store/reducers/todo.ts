import { TodoState, TodoActions, GET_TODOS } from "../types/todo";

const initialState: TodoState = {
  todos: [],
};

const reducer = (
  state: TodoState = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
