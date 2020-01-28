import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Start from './Start';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Start />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
