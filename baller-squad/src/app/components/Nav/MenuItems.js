import React, {useContext} from "react";
import { MenuItem } from "./MenuItem";
import { LoginMenuItem } from "./LoginMenuItem";
import { UserContext } from "../../userContext";

export const MenuItems = ({ isNavOpen, currentRoute, setCurrentRoute }) => {

  const {userInfo, setUserInfo} = useContext(UserContext);

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
      {
        userInfo.isLoggedIn ? <MenuItem
        link="/hiScores"
        text="High Scores"
        isNavOpen={isNavOpen}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      /> : null}
      <LoginMenuItem 
        text="Login" 
        setCurrentRoute={setCurrentRoute}
        isNavOpen={isNavOpen}  
      />
      
      
    </>
  );
};
