import { createStore, applyMiddleware } from "redux";
import Thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, AppState } from "./reducers";
import { AppActions } from "./actions";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(Thunk as ThunkMiddleware<AppState, AppActions>)
  )
);
