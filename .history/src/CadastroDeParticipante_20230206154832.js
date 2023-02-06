import React, { useState } from 'react';

const Registration = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [event, setEvent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/participantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          email,
          number,
          event
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
          Number:
          <input
            type="text"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </label>
        <br />
        <label>
          Event:
          <input
            type="text"
            value={event}
            onChange={(event) => setEvent(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
