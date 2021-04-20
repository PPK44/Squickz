import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { UserContext } from "./userContext";
import { RouteContext } from "./routeContext";
import { TopNavModule } from "./pages/TopNav";
import { PageWrapper } from "./components/PageWrapper";
import { CenterLayout } from "./components/CenterLayout";

export const App = () => {
  const [userInfo, setUserInfo] = useState({ userName: "", isLoggedIn: false });
  const [route, setRoute] = useState("/");
  const providerValue = useMemo(() => ({ userInfo, setUserInfo }), [
    userInfo,
    setUserInfo,
  ]);

  const routeProvider = useMemo(() => ({ route, setRoute }), [route, setRoute]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const page = localStorage.getItem("page");
    if (user) {
      setUserInfo({ userName: user, isLoggedIn: true });
      console.log("Currently Logged In User:", user);
    }
    if (page) {
      setRoute(page);
    }
    return () => {
      localStorage.removeItem("page");
    };
  }, []);

  // When the tab closes remove the localstore for currently visited page
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    localStorage.removeItem("page");
  });

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <RouteContext.Provider value={routeProvider}>
          <PageWrapper>
            <CenterLayout>
              <TopNavModule />
              <Routes />
            </CenterLayout>
          </PageWrapper>
        </RouteContext.Provider>
      </UserContext.Provider>
    </Router>
  );
};
