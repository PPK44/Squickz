import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Item from "./components/item";

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <Item />
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;
