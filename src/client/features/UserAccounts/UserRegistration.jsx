import { useState } from "react";
import { useRegisterMutation, useLoginMutation } from "./authSlice.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ username, password });
      await login({ username, password });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <h1>Register</h1>
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
        <button className="form-button">Register</button>
      </form>
    </>
  );
};

export default Register;
