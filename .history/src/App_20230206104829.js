import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./assets/logo.png";
import { RoutesProject } from "./Routes";
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
      <RoutesProject />
    </>
  );
}
export default App;