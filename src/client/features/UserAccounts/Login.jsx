import { useState } from "react";
import { useLoginMutation } from "./authSlice.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
    } catch (err) {
      next(err);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="form-labels">Username: </label>
        <input
          className="form-inputs"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-labels">Password: </label>
        <input
          className="form-inputs"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button">Log In</button>
      </form>
    </>
  );
}
