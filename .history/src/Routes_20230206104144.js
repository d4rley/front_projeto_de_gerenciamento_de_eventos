import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Registration from "./CadastroDeParticipante";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cadastrar" render={() => <Registration />} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
