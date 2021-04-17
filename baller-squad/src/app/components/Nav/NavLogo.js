import React from "react";
import logo from "../../../assets/logo.png";
import squickz from "../../../assets/squickz.png";
import { Link } from "react-router-dom";

export const NavLogo = () => {
  return (
    <>
      <Link to="/" className={"pl-5 flex flex-row items-center"}>
        <img src={squickz} alt="Squickz" className={`block h-10 w-auto`} />
        <img
          src={logo}
          alt="Squickz"
          className={`hidden lg:block h-16 w-auto ml-2`}
        />
      </Link>
    </>
  );
};
