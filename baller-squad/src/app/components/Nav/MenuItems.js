import React from "react";
import { MenuItem } from "./MenuItem";
import { LoginMenuItem } from "./LoginMenuItem";

export const MenuItems = ({ isNavOpen, currentRoute, setCurrentRoute }) => {

  return (
    <>
      <MenuItem
        link="/"
        text="Home"
        isNavOpen={isNavOpen}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <MenuItem
        link="/play"
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
      <LoginMenuItem 
        text="Login" 
        setCurrentRoute={setCurrentRoute}
        isNavOpen={isNavOpen}  
      >
      </LoginMenuItem>
      
      
    </>
  );
};
