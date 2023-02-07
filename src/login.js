import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/entrar",
        {
          email: username,
          password: password,
        },
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/inicio");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="login-container">
      {error && <p>{error}</p>}
      <label className="form-title">
        Email:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <label className="form-title">
        Senha:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <button onClick={handleSubmit} type="button" className="form-submit">
        Submit
      </button>
    </div>
  );
};

export default Login;
