import userReducer from "./users";
import todoReducer from "./todo";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
