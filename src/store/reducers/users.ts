import {
  UserActions,
  UserState,
  GET_USERS,
  GET_USER,
  CLEAR_USER,
} from "../types/user";

const initialState: UserState = {
  selectedUser: null,
  users: [],
};
const reducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        selectedUser: null,
      };
    default:
      return state;
  }
};

export default reducer;
