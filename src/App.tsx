import React from "react";
import UsersList from "./pages/UsersList";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Todos from "./pages/Todos";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId/todos" component={Todos} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
