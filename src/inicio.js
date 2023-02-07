import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from './assets/logo.png';
import { useNavigate } from "react-router-dom";

function Inicio() {
    const navigate = useNavigate();
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
                <div>
                    <img src={Logo} alt="logo do projeto" style={{width: 100, height: 50}}/>
                    <button className={"button_register"} onClick={()=>navigate('/evento')}>Cadastrar Evento</button>
                    <button className={"button_register"} onClick={()=>navigate('/login')}>Login</button>
                </div>
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
                    <button className={"button"} onClick={()=>navigate('/cadastrar')}>inscrever-se</button>
                    </div>
                );
                })}
            </div>
            </>
        );
    }
export default Inicio;
