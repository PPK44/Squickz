import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
