import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { TopNavModule } from "./modules/Nav/TopNav";

export const App = () => {
  return (
    <Router>
      <TopNavModule />
      <Routes />
    </Router>
  );
};
