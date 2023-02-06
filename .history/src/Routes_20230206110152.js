import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Registration from "./CadastroDeParticipante";
import Inicio from "./inicio";

export const RoutesProject = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Registration />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};
