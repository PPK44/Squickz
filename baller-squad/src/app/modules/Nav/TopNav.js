import React, { useState, useEffect } from "react";
import { TopNav } from "../../components/Nav/TopNav";
import { MenuItems } from "../../components/Nav/MenuItems";
import { MobileMenu } from "../../components/Nav/MobileMenu";

export const TopNavModule = () => {
  const [isNavOpen, setNavOpen] = useState(false); // state for opening/closing navbar in mobile menu

  useEffect(() => {
    console.log("TopNav Render: " + isNavOpen);
  });

  return (
    <nav className={`bg-simple-gray-1e`}>
      <TopNav
        isNavOpen={isNavOpen}
        toggleMenu={() => setNavOpen(!isNavOpen)}
        menuItems={<MenuItems isNavOpen={isNavOpen} />}
      />
      {isNavOpen ? <MobileMenu isNavOpen={isNavOpen} /> : null }
    </nav>
  );
};
