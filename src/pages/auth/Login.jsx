import React, { useState } from "react";
import { user } from "../../helpers/constants";
import { login } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    for (let i = 0; i < data.users.length; i++) {
      const currentUser = data.users[i];
      if (
        user.username === currentUser.username &&
        user.password === currentUser.password
      ) {
        dispatch(login(currentUser));
        navigate("/");
        break;
      } else {
        console.log("Not found");
      }
    }
  }

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={handleUserNameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Log-In</button>
    </div>
  );
}
