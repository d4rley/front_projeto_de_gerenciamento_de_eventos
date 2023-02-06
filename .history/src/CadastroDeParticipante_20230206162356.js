import axios from "axios";
import React, { useState } from "react";

const Registration = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [event_id, setEvent_id] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/participantes",
        {
          name: nome,
          email: email,
          numero: numero,
          evento: event_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <label>
        nome:
        <input
          type="text"
          value={nome}
          onChange={(event_id) => setNome(event_id.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event_id) => setEmail(event_id.target.value)}
        />
      </label>
      <br />
      <label>
        numero:
        <input
          type="text"
          value={numero}
          onChange={(event_id) => setNumero(event_id.target.value)}
        />
      </label>
      <br />
      <label>
        Evento:
        <input
          type="text"
          value={event_id}
          onChange={(event_id) => setEvent_id(event_id.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Registration;
