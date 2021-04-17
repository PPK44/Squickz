import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/play" component={Play} />
    </Switch>
  );
};
