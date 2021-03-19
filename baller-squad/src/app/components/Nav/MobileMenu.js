import React from "react";
import { NavClosedIcon } from "../../svgs/NavClosedIcon";
import { NavOpenIcon } from "../../svgs/NavOpenIcon";


export const MobileMenu = ({ toggleMenu, isNavOpen }) => {
  return (
    <>
      <button
        type="button"
        className={
          "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        }
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <span className={"sr-only"}>Open Main Menu</span>
        {
          isNavOpen ? <NavOpenIcon /> : <NavClosedIcon />
        }

      </button>
    </>
  );
};
