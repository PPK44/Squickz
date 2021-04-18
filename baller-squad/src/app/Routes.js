import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { HighScores } from "./pages/HighScores";
import { Play } from "./pages/Play";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hiScores" component={HighScores} />
      <Route exact path="/play" component={Play} />
    </Switch>
  );
};
