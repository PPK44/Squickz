import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuItems = ({ isNavOpen }) => {
  return (
    <>
      <MenuItem link="/" text="Play" isNavOpen={isNavOpen} />
      <MenuItem link="/" text="Rules" isNavOpen={isNavOpen} />
      <MenuItem link="/" text="Hi Scores" isNavOpen={isNavOpen} />
    </>
  );
};
