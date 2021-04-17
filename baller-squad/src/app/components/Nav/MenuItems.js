import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuItems = ({ isNavOpen, currentRoute, setCurrentRoute }) => {
  return (
    <>
      <MenuItem
        link="/"
        text="Play"
        isNavOpen={isNavOpen}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <MenuItem
        link="/rules"
        text="Rules"
        isNavOpen={isNavOpen}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <MenuItem
        link="/hiScores"
        text="Hi Scores"
        isNavOpen={isNavOpen}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <MenuItem
        link="/login"
        text="Login"
        isNavOpen={isNavOpen}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <MenuItem
        link="/register"
        text="Register"
        isNavOpen={isNavOpen}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
    </>
  );
};
