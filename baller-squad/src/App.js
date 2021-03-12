import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div> MEME</div>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;
