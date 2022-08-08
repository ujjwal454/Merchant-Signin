import React from "react";
import { signOutInitiate } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state);

  return (
    <div>
      Hello {userState?.user?.email}{" "}
      <button onClick={() => dispatch(signOutInitiate())}> Signout </button>{" "}
    </div>
  );
};

export default Home;
