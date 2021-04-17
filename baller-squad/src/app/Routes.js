import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { HighScores } from "./pages/HighScores";
import { Play } from "./pages/Play";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hiScores" component={HighScores} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/play" component={Play} />
    </Switch>
  );
};
