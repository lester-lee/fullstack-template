import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Register Page</h1>
      <form className="login-form">
        <label className="form-labels">Email: </label>
        <input
          className="form-inputs"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
}
