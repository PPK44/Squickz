import React from "react";
import { MenuItems } from "./MenuItems";

export const MobileMenu = ({isNavOpen, currentRoute, setCurrentRoute}) => {
  return (
    <>
      <div className={`sm:hidden`} id="mobile-menu">
        <div className={`px-2 pt-2 pb-3 space-y-1`}>
          <MenuItems isNavOpen={isNavOpen} currentRoute={currentRoute} setCurrentRoute={setCurrentRoute}/>
        </div>
      </div>
    </>
  );
};
