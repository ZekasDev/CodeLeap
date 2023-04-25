import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./LoginModal.scss";

export function LoginModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  function logIn() {
    if (username === "") return;

    dispatch({ type: "SET_USERNAME", payload: username });
    navigate("/posts");
  }
  return (
    <div className="login-modal-wrapper">
      <h3>Welcome to CodeLeap network!</h3>
      <span>Please enter your username</span>
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="John Doe"
      />
      <button disabled={username === ""} onClick={logIn} className="primary-button">
        ENTER
      </button>
    </div>
  );
}
