import React from "react";
import Home from './components/Home'
import Forum from './components/Forum'
import Placements from './components/Placements'
import Projects from './components/Projects'

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Forum" component={Forum} exact />
        <Route path="/Placements" component={Placements} exact />
        <Route path="/Projects" component={Projects} exact />
      </Switch>
    </div>
  );
}

export default App;
