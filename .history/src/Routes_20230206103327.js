import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from './CadastroDeParticipante';

export default[
    <>
      <Route path="/cadastrar" render={() => <Registration />} />
  </>
];
