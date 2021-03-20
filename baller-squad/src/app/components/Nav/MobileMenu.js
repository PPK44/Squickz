import React from "react";
import { MenuItems } from "./MenuItems";

export const MobileMenu = ({isNavOpen}) => {
  return (
    <>
      <div className={`sm:hidden`} id="mobile-menu">
        <div className={`px-2 pt-2 pb-3 space-y-1`}>
          <MenuItems isNavOpen={isNavOpen}/>
        </div>
      </div>
    </>
  );
};
