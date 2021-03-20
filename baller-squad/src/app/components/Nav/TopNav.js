// Nav section for application
// using code from here https://tailwindui.com/components/application-ui/navigation/navbars
import React from "react";
import { NavLogo } from "./NavLogo";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

export const TopNav = ({ toggleMenu, isNavOpen, menuItems }) => {
  return (
    <>
      <div className={`max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8`}>
        <div className={`relative flex items-center justify-between h-24`}>
          <NavLogo />
          <MobileMenuButton toggleMenu={toggleMenu} isNavOpen={isNavOpen} />
          <div className={`hidden sm:block sm:ml-6 items-center`}>
            {menuItems}
          </div>
        </div>
      </div>
    </>
  );
};
