import { UserActions } from "../types/user";
import { TodoActions } from "../types/todo";

export type AppActions = UserActions | TodoActions;
