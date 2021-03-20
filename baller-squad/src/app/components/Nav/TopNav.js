// Nav section for application
// using code from here https://tailwindui.com/components/application-ui/navigation/navbars
import React from "react";
import logo from "../../../assets/logo.png";
import squickz from "../../../assets/squickz.png";

export const TopNav = ({ mobileMenu, isNavOpen, menuItems }) => {
  return (
    <>
      <nav className={`bg-gray-800`}>
        <div className={`max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8`}>
          <div className={`relative flex items-center justify-between h-24`}>
            {mobileMenu}
            <div
              className={
                "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
              }
            >
              <div className={"flex-shrink-0 flex items-center"}>
                <img
                  src={squickz}
                  alt="Squickz"
                  className={`block h-18 w-auto`}
                />
                <img
                  src={logo}
                  alt="Squickz"
                  className={`hidden lg:block h-16 w-auto`}
                />
              </div>
              <div className={"hidden sm:block sm:ml-6"}>
                <div className={"flex space-x-4"}>{menuItems}</div>
              </div>
              <div className={"sm:hidden"} id="mobile-menu">
                <div className={`px-2 pt-2 pb-3 space-y-1`}>{menuItems}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
