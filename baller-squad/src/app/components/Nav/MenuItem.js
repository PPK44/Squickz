import React from "react";
import { Link } from "react-router-dom";

const navNotOpenClass = `ml-4 lg:px-8 px-4 py-4 rounded-md text-lg font-medium`;
const navOpenClass = `block px-3 py-2 rounded-md text-base font-medium text-white`;

export const MenuItem = ({ link, text, isNavOpen, isActive }) => {
  console.log(isNavOpen)
  return (
    <>
      <Link
        to={link}
        className={`${
          isActive
            ? "bg-blue-600 text-white"
            : "text-purple-500 hover:bg-purple-700 hover:text-white"
        } ${isNavOpen ? navOpenClass : navNotOpenClass}`}
      >
        {text}
      </Link>
    </>
  );
};
