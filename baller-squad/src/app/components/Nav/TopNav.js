// Nav section for application
// using code from here https://tailwindui.com/components/application-ui/navigation/navbars
// and https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
import React from "react";
import logo from "../../../assets/logo.png";
import squickz from "../../../assets/squickz.png";
import { MobileMenu } from "./MobileMenu";

export const TopNav = () => {
  return (
    <nav className={`bg-gray-800`}>
      <div className={`max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8`}>
        <div className={`relative flex items-center justify-between h-24`}>
          <MobileMenu />
          <div
            className={
              "flex-1 flex items-center justify-center sm:items-stretch sm:justify-center"
            }
          >
            <div className={"flex-shrink-0 flex items-center"}>
              <img src={squickz} alt="logo" className={`block h-18 w-auto`} />
              <img src={logo} alt="logo" className={`block h-16 w-auto`} />
            </div>
            <div className={"hidden sm:block ml-6"}>
              <div className={'flex space-x-4'}>
                <a href="/hey" className={'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'}>Heyyoo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
