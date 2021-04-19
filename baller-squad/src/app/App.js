import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { UserContext } from "./userContext";
import { TopNavModule } from "./pages/TopNav";
import { PageWrapper } from "./components/PageWrapper";
import { CenterLayout } from "./components/CenterLayout";

export const App = () => {
  const [userInfo, setUserInfo] = useState({ userName: "", isLoggedIn: false });
  const providerValue = useMemo(() => ({ userInfo, setUserInfo }), [
    userInfo,
    setUserInfo,
  ]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      console.log(JSON.stringify(user))
      setUserInfo({ userName: user, isLoggedIn: true })
      console.log("Currently Logged In User:",user)
    }
  }, []);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <PageWrapper>
          <CenterLayout>
            <TopNavModule />
            <Routes />
          </CenterLayout>
        </PageWrapper>
      </UserContext.Provider>
    </Router>
  );
};
