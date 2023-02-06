import * as React from "react";
import { Route, Routes, Switch, BrowserRouter } from "react-router-dom";
import Registration from "./CadastroDeParticipante";

export const RoutesProject = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Registration />} />
        {/* <Route path="/inicio" element={<Registration />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
