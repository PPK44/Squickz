import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PageWrapper } from "./components/PageWrapper";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
