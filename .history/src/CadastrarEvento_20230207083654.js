import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const RegistrationEvento = () => {
  const navigate = useNavigate();
  const token=localStorage.getItem("token");
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [responsavel, setResponsavel] = useState("");
  useEffect(()=>{
    if(token==null){    
      navigate('/login');
    }
  },[])
  async function handleSubmit() {
    try {
      
      const response = await axios.post(
        "http://127.0.0.1:8000/api/evento",
        {
          nome: nome,
          data: data,
          local: local,
          evento_id: responsavel,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      
    }
  };
    return (
      <div>
        <h1>Cadastro De Evento</h1>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </label>
        <br />
        <label>
          Data:
          <input
            type="data"
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
        </label>
        <br />
        <label>
          Local:
          <input
            type="text"
            value={local}
            onChange={(event) => setLocal(event.target.value)}
          />
        </label>
        <br />
        <label>
          Responsavel:
          <select
          />
        </label>
        <br />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    );
};

export default RegistrationEvento;
