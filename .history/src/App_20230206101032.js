import "./App.css";
import React, { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Logo from '../public/logo.png';
function App() {
  const [listagemdata, setListagemData] = useState([]);
  async function listagemEventos() {
    const response = await axios.get("http://127.0.0.1:8000/api/evento");
    setListagemData(response.data.dados);
  }
  useEffect(() => {
    listagemEventos();
  }, []);
  return (
    <>
      <header>
        <img src={Logo} alt="logo do projeto"/>
      </header>
      <div className={"lado"}>
        {listagemdata.map((row) => {
          return (
            <div className={"box"}>
              <ul>
                <il className={"events"}>Nome: {row.nome}</il>
                <br />
                <il className={"events"}>Data: {row.data}</il>
                <br />
                <il className={"events"}>Local: {row.local}</il>
                <br />
                <il className={"events"}>Résponsavel: {row.responsavel}</il>
                <br />
              </ul>
              <button className={"button"}>inscrever-se</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
