import React, { useState, useEffect } from "react";
import { TopNav } from "../../components/Nav/TopNav";
import { MobileMenu } from "../../components/Nav/MobileMenu";
import { MenuItems } from "../../components/Nav/MenuItems";

export const TopNavModule = () => {
  const [isNavOpen, setNavOpen] = useState(false); // state for opening/closing navbar in mobile menu

  useEffect(() => {
    console.log("TopNav Render: " + isNavOpen);
  });

  return (
    <TopNav
      isNavOpen={isNavOpen}
      toggleMenu = {() => setNavOpen(!isNavOpen)} 
      menuItems = {<MenuItems />}
    />
  );
};
