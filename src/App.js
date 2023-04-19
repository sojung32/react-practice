import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./styles/style.scss";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail" exact>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;