import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../reducers";
import {
  GetUsersAction,
  User,
  GetUserAction,
  GET_USERS,
  GET_USER,
  ClearUserAction,
  CLEAR_USER,
} from "../types/user";
import axios from "axios";

export type AppThunk = ActionCreator<
  ThunkAction<void, AppState, null, Action<string>>
>;

export const getUsers = () => async (
  dispatch: Dispatch<GetUsersAction>
): Promise<GetUsersAction> => {
  const users = await axios.get<User[]>("http://localhost:9000/users");
  return dispatch({
    type: GET_USERS,
    payload: users.data,
  });
};

export const getUser = (id: number) => async (
  dispatch: Dispatch<GetUserAction>
): Promise<GetUserAction> => {
  const users = await axios.get<User>(`http://localhost:9000/users/${id}`);
  return dispatch({
    type: GET_USER,
    payload: users.data,
  });
};

export const clearUser = (): ClearUserAction => {
  return {
    type: CLEAR_USER,
  };
};
