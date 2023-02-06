import React, { useState } from 'react';

const Registration = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [event_id, setEvent_id] = useState('');

  const handleSubmit = async (event_id) => {
    event_id.prevent_idDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/participantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          email,
          numero,
          event_id
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
