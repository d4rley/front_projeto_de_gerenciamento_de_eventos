import * as React from "react";
import { Route, Routes, Switch, BrowserRouter } from "react-router-dom";
import Registration from "./CadastroDeParticipante";


const Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/cadastrar" render={() => <Registration />} />
    </Routes>
        
    </BrowserRouter>
  );
};
export default Routes;
