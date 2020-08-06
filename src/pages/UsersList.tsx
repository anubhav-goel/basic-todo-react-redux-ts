import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUser } from "../store/actions/users";
import { AppState } from "../store/reducers";
import { User } from "../store/types/user";
import { Link } from "react-router-dom";

const UsersList: React.FC = () => {
  const [userCount, setUserCount] = useState<number>(0);
  const users: User[] = useSelector((state: AppState) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    setUserCount(users.length);
  }, [users]);

  const renderUserList = () => {
    return (
      <ul>
        {users.map((user: User) => (
          <li key={user.id} onClick={() => dispatch(getUser(user.id))}>
            <Link to={`/users/${user.id}/todos`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div>{userCount}</div>
      {renderUserList()}
    </>
  );
};

export default UsersList;
