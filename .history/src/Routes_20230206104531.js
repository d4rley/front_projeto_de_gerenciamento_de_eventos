import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Registration from "./CadastroDeParticipante";


const Routes = () => {
  return (
    <BrowserRouter>
        <Route exact path="/cadastrar" render={() => <Registration />} />
    </BrowserRouter>
  );
};
export default Routes;
