import './App.css';
import React, { useState,useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

function App() {
  const [listagemdata, setListagemData]=useState([]);
  async function listagemEventos(){
    const response =await axios.get(
      'http://127.0.0.1:8000/api/evento'
    );
    setListagemData(response.data.dados);
    }
    useEffect(() => {
      listagemEventos();
    },  [] )
    return(
      <>
      <h1>oi</h1>
      </>
    );
    
}
export default App;
