import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SelfRegistration from "./Autocadastro";
import RegistrationEvento from "./CadastrarEvento";
import Registration from "./CadastroDeParticipante";
import Inicio from "./inicio";
import Login from "./login";

export const RoutesProject = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Registration />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<SelfRegistration />} />
        <Route path="/evento" element={<RegistrationEvento />} />
      </Routes>
    </BrowserRouter>
  );
};
