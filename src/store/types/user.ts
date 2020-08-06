export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";

export interface UserState {
  users: User[];
  selectedUser: null | User;
}

export interface GetUsersAction {
  type: typeof GET_USERS;
  payload: User[];
}

export interface GetUserAction {
  type: typeof GET_USER;
  payload: User;
}

export interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActions = GetUserAction | GetUsersAction | ClearUserAction;
