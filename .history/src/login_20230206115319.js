import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit() {
    try {
      await axios.post(
        "http://127.0.0.1:8000/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit} type="button">
        Submit
      </button>
    </div>
  );
};

export default Login;
