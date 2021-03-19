import React, { useState, useEffect } from "react";
import { TopNav } from "../../components/Nav/TopNav";
import { MobileMenu } from "../../components/Nav/MobileMenu";

export const TopNavModule = () => {
  const [isNavOpen, setNavOpen] = useState(false); // state for opening/closing navbar in mobile menu

  useEffect(() => {
    console.log("TopNav Render");
  });

  return (
    <TopNav isNavOpen={isNavOpen}>
      <MobileMenu toggleMenu={() => setNavOpen(!isNavOpen)} isNavOpen={isNavOpen} />
    </TopNav>
  );
};
