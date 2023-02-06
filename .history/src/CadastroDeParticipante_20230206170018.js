import axios from "axios";
import React, { useState } from "react";

const Registration = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [event_id, setEvent_id] = useState("");

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/evento",
        {
          nome: nome,
          email: email,
          numero: numero,
          evento_id: event_id,
        },
        {headers: {
          name:"csrf-token",
          content:"{{ csrf_token() }}"
        }}
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
          onChange={(event) => setNome(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        numero:
        <input
          type="text"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
        />
      </label>
      <br />
      <label>
        Evento:
        <input
          type="text"
          value={event_id}
          onChange={(event) => setEvent_id(event.target.value)}
        />
      </label>
      <br />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default Registration;
