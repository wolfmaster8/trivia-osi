import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TriviaProvider } from './context';
import Start from './features/Start';
import Trivia from './features/Trivia';
import { MainWrapper } from './shared/styles';
import Finish from './features/Finish';
import Footer from './shared/components/Footer';

function App() {
  return (
    <Router>
      <TriviaProvider>
        <Switch>
          <MainWrapper>
            <Route component={Start} path="/" exact />
            <Route component={Trivia} path="/trivia" exact />
            <Route component={Finish} path="/finish" exact />
            <Footer />
          </MainWrapper>
        </Switch>
      </TriviaProvider>
    </Router>
  );
}

export default App;
