import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { TopNavModule } from "./modules/Nav/TopNav";
import { PageWrapper } from "./components/PageWrapper";
import { CenterLayout } from "./components/CenterLayout";

export const App = () => {
  return (
    <Router>
      <PageWrapper>
        <CenterLayout>
          <TopNavModule />
          <Routes />
        </CenterLayout>
      </PageWrapper>
    </Router>
  );
};
