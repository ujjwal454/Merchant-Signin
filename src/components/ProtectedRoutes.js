import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Signup from "../Pages/Signup";
import { removeError } from "../redux/actions/action";
const ProtectedRoute = () => {
  const userState = useSelector((state) => state);
  console.log(userState);
  const user = userState?.user;
  const error = userState?.error;
  const [User, setUser] = useState(user);
  console.log("hello");
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, [user]);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(removeError());
    }
  }, [error]);
  return User ? <Outlet /> : <Signup />;
};

export default ProtectedRoute;
