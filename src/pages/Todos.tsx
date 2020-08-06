import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Todo } from "../store/types/todo";
import { AppState } from "../store/reducers";
import { getTodoByUser } from "../store/actions/todo";
import { clearUser } from "../store/actions/users";

type Props = {};
type RouterExtenderProps = Props & RouteComponentProps<{ userId: string }>;

const Todos: React.FC<RouterExtenderProps> = (props: RouterExtenderProps) => {
  const todos: Todo[] = useSelector((state: AppState) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoByUser(parseInt(props.match.params.userId)));

    return () => {
      dispatch(clearUser());
    };
  }, []);

  const renderTodos = () => {
    const style: React.CSSProperties = {
      border: "2px solid",
      padding: "2px",
      margin: "10px",
      borderRadius: "10px",
      textAlign: "center",
      fontSize: "2rem",
    };
    return todos.map((todo: Todo) => {
      return (
        <div key={todo.id} style={style}>
          <p>{todo.title}</p>
        </div>
      );
    });
  };

  return (
    <>
      {todos.length}
      {renderTodos()}
    </>
  );
};

export default Todos;
