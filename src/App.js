import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TriviaContext from './context'
import Start from './features/Start';
import Trivia from './features/Trivia';

function App() {

  const context = {
    name: 'Felipe',
    score: ''
  }
  return (
    <Router>
      <TriviaContext.Provider value={context}>
      <Switch>
        <Route component={Start} path="/" exact />
        <Route component={Trivia} path="/trivia" exact />
      </Switch>
      </TriviaContext.Provider>
      
    </Router>
  );
}

export default App;
