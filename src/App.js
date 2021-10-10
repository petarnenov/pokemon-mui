import React, { useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PokeDeskMemo } from './components/PokeDesk';
import { useHTTP } from './hooks/use-http';
import { api } from './db/api';
import CircularIndeterminate from './UI/CircularUnderLoader';

const Pokemon = React.lazy(() => import('./components/Pokemon.js'));

export default function App() {
  const { sendRequest } = useHTTP();
  useEffect(() => {
    sendRequest({
      input: api.url,
      init: { method: 'GET' },
      action: 'setItems',
    });
  }, [sendRequest]);
  return (
    <Suspense fallback={<CircularIndeterminate />}>
      <Switch>
        <Route exact path="/">
          <PokeDeskMemo />
        </Route>
        <Route exact path="/:id">
          <Pokemon />
        </Route>
      </Switch>
    </Suspense>
  );
}
