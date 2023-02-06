import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from './CadastroDeParticipante';

export default[
    <>
    <Switch>
      <Route path="/cadastroparticipante" render={() => <Registration />} />
    </Switch>
  </>
];
