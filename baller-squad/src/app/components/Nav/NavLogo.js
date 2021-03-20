import React from "react";
import logo from "../../../assets/logo.png";
import squickz from "../../../assets/squickz.png";

export const NavLogo = () => {
  return (
    <>
      <a href="/" className={"pl-5 flex flex-row items-center"}>
        <img src={squickz} alt="Squickz" className={`block h-18 w-auto`} />
        <img
          src={logo}
          alt="Squickz"
          className={`hidden lg:block h-16 w-auto`}
        />
      </a>
    </>
  );
};
