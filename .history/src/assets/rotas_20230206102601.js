import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

export default[
    <>
    <Switch>
      <Route exact path="/" render={() => <InitialPage />} />
    </Switch>
  </>,
];
