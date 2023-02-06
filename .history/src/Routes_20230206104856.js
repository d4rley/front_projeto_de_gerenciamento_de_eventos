import * as React from "react";
import { Route, Routes, Switch, BrowserRouter } from "react-router-dom";
import Registration from "./CadastroDeParticipante";


export const RoutesProject = () => {
  return (
    <Routes>
      <Route exact path="/cadastrar" render={() => <Registration />} />
    </Routes>
  );
};