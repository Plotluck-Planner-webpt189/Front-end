import React from "react";
import Input from "./ChangeInput";

let Register = () => {
  let [username, setUsername] = Input("");
  let [password, setPassword] = Input("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      username: username,
      password: password,
    };

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;